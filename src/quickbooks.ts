import ky, { HTTPError, KyInstance, Options } from 'ky';
import { v4 as uuidv4 } from 'uuid';

import { Client, HTTPAlias, QuickbooksArgs } from './@types/global';
import { AuthResponse } from './@types/payment';

const getNewToken = async (
  clientId: string,
  clientSecret: string,
  refresh_token: string
) => {
  try {
    const resp: AuthResponse = await ky
      .post('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        searchParams: {
          grant_type: 'refresh_token',
          refresh_token,
        },
      })
      .json();

    return resp;
  } catch (e: any) {
    if (e.name === 'HTTPError') {
      throw ErrorHandler(e);
    }
  }
};

const ErrorHandler = async (error: HTTPError) => {
  if (error.response) {
    const body = await error.response.json();
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
  ky: KyInstance;
  constructor() {
    this.client = {} as Client;
    this.ky = ky;
    return;
  }
  createClient = ({
    accessToken,
    baseUrl,
    debug = true,
    defaults,
    needNewToken,
    realmId,
    useSandbox = false,
  }: QuickbooksArgs): void => {
    const prefixUrl = useSandbox
      ? baseUrl || ''
      : (baseUrl || '').replace(/sandbox[.-]/, '');
    const defaultOpts: Options = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Company-Id': realmId,
        'Content-Type': 'application/json',
        'Request-Id': uuidv4(),
        'User-Agent': 'node-ts-quickbooks',
      },
      hooks: {
        afterResponse: [
          async (request, options, response) => {
            if (response.status === 401) {
              // Unauthorized
              let token = '';
              if (needNewToken) token = await needNewToken(getNewToken);

              if (!token) throw new Error('No new token provided');

              request.headers.set('Authorization', `Bearer ${token}`);

              // // Save for further requests
              // client.defaults.options.headers.Authorization = token;

              // Make a new retry
              return ky(request);
            }

            // No changes otherwise
            return response;
          },
        ],
      },
      prefixUrl,
    };

    let kyClient = ky.create(defaultOpts);
    if (defaults) kyClient = kyClient.extend(defaults);

    this.client = {} as Client;
    this.ky = kyClient;
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
          const request = kyClient(url, {
            ...options,
            method,
          });
          const data = (await request.json()) as Record<string, any>;
          if (data) {
            const keys = Object.keys(data);
            keys.splice(keys.indexOf('time'));
            if (keys.length === 1) return data[keys[0]] as ReturnType;
          }
          return data as ReturnType;
        } catch (e: any) {
          throw ErrorHandler(e);
        }
      };
    });
    this.client.extend = kyClient.extend;

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

          const opts = {
            ...(options || {}),
            json: entity,
            searchParams: {
              operation: 'delete',
            },
          };

          return this.client.post(url, opts);
        }

        const opts = {
          ...(options || {}),
          json: idOrEntity,
          searchParams: {
            operation: 'delete',
          },
        };
        // if the option is an entity, delete it
        return this.client.post(url, opts);
      } catch (e: any) {
        throw ErrorHandler(e);
      }
    };
  };
}
