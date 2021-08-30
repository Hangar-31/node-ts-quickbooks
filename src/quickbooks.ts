import got, {
  CancelableRequest,
  Got,
  HTTPAlias,
  Options,
  RequestError,
  Response,
} from 'got';
import { v4 as uuidv4 } from 'uuid';

const getNewToken = async (
  clientId: string,
  clientSecret: string,
  refresh_token: string,
  onRefresh: (resp: AuthResponse) => void
) => {
  try {
    const resp: AuthResponse = await got
      .post('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', {
        form: {
          grant_type: 'refresh_token',
          refresh_token,
        },
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .json();

    onRefresh(resp);

    return 'Bearer ' + resp.access_token;
  } catch (e) {
    throw ErrorHandler(e);
  }
};

const ErrorHandler = (error: RequestError): RequestError | QuickbooksError => {
  if (error?.response?.body) {
    const body = JSON.parse(error.response.body as string);
    if (body?.errors?.[0]) {
      throw new QuickbooksError(body.errors[0]);
    }
    if (body?.Fault?.Error?.[0]) {
      console.log('body?.Fault?.Error?.[0]', body?.Fault?.Error?.[0]);
      const { Detail, Message, code } = body?.Fault?.Error?.[0] as Record<
        string,
        string
      >;
      throw new QuickbooksError({ code, detail: Detail, message: Message });
    }
  }
  return error;
};

class QuickbooksError extends Error {
  name: string;
  message: string;
  code: string;
  infoLink?: string;
  detail: string;
  constructor(opts: {
    type?: string;
    message: string;
    code: string;
    infoLink?: string;
    detail: string;
  }) {
    super(opts.message);
    this.name = opts.type || 'Fault Error';
    this.message = opts.message;
    this.code = opts.code;
    this.infoLink = opts.infoLink;
    this.detail = opts.detail;
  }
}

export default class Quickbooks {
  client: Client;
  got: Got;
  constructor() {
    this.client = {} as Client;
    this.got = got;
    return;
  }
  createClient = ({
    accessToken,
    baseUrl,
    clientId,
    clientSecret,
    debug = true,
    defaults,
    onRefresh,
    realmId,
    refreshToken,
    useSandbox = false,
  }: QuickbooksArgs): void => {
    const prefixUrl = useSandbox
      ? baseUrl || ''
      : (baseUrl || '').replace(/sandbox[.-]/, '');
    const defaultOpts = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Company-Id': realmId,
        'Content-Type': 'application/json',
        'Request-Id': uuidv4(),
        'User-Agent': 'node-ts-quickbooks',
      },
      hooks: {
        afterResponse: [
          async (response: Response, retryWithMergedOptions: any) => {
            if (response.statusCode === 401) {
              // Unauthorized

              const token = await getNewToken(
                clientId,
                clientSecret,
                refreshToken,
                onRefresh
              ); // Refresh the access token
              const updatedOptions = {
                headers: {
                  Authorization: token,
                },
              };
              // Save for further requests
              client.defaults.options.headers.Authorization = token;

              // Make a new retry
              return retryWithMergedOptions(updatedOptions);
            }

            // No changes otherwise
            return response;
          },
        ],
        beforeRequest: [
          async (opts: Options) => {
            // @ts-ignore
            if (debug) console.log('opts', opts.url.href);
          },
        ],
      },
      prefixUrl,
    };
    const opts = defaults
      ? got.mergeOptions(defaultOpts, defaults)
      : defaultOpts;

    const client = got.extend(opts);

    this.client = {} as Client;
    this.got = client;
    const methods: HTTPAlias[] = [
      'get',
      'post',
      'put',
      'patch',
      'head',
      'delete',
    ];
    methods.map(method => {
      this.client[method] = async <ReturnType>(
        url: string | URL,
        options?: Options
      ): Promise<ReturnType> => {
        try {
          const request = client(url, {
            ...options,
            method,
          }) as CancelableRequest<ReturnType>;
          const data = (await request.json()) as Record<string, any>;
          if (data) {
            const keys = Object.keys(data);
            keys.splice(keys.indexOf('time'));
            if (keys.length === 1) return data[keys[0]] as ReturnType;
          }
          return data as ReturnType;
        } catch (e) {
          throw ErrorHandler(e);
        }
      };
    });

    this.client.deleteEntity = async <ReturnType>(
      url: string,
      idOrEntity: string | Record<any, any>,
      options?: Options
    ): Promise<ReturnType> => {
      try {
        // if the id is a string, get the full entity and then delete it
        if (typeof idOrEntity === 'string') {
          const entity: Record<string, any> = await this.client.get(
            url + idOrEntity
          );
          const opts = client.mergeOptions(options || {}, {
            json: entity,
            searchParams: { operation: 'delete' },
          });
          return this.client.post(url, opts);
        }
        const opts = client.mergeOptions(options || {}, {
          json: idOrEntity,
          searchParams: { operation: 'delete' },
        });
        // if the option is an entity, delete it
        return this.client.post(url, opts);
      } catch (e) {
        throw ErrorHandler(e);
      }
    };
  };
}
