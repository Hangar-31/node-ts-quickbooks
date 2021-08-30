type QuickbooksArgs = {
  clientId: string;
  clientSecret: string;
  realmId: string;
  accessToken: string;
  refreshToken: string;
  useSandbox: boolean; // use the sandbox?
  debug: boolean; // enable debugging?
  onRefresh: (resp: AuthResponse) => void;
  baseUrl?: string;
  defaults?: Options;
};

interface GotRequestFunction {
  <ReturnType>(url: string, options?: Options): Promise<ReturnType>;
}

interface EntityRequestionFunction {
  <ReturnType>(
    url: string,
    idOrEntity?: string | any,
    options?: Options
  ): Promise<ReturnType>;
}
type Client = Record<
  HTTPAlias | 'deleteEntity',
  GotRequestFunction | EntityRequestionFunction
>;
