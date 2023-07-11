import { HTTPAlias, Options } from 'got/dist/source';

import { AuthResponse } from './payment';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
export type QuickbooksArgs = {
  accessToken: string;
  baseUrl?: string;
  debug: boolean; // enable debugging?
  defaults?: Options;
  needNewToken?: () => string;
  realmId: string;
  useSandbox: boolean; // use the sandbox?
};

export interface GotRequestFunction {
  <ReturnType>(url: string, options?: Options): Promise<ReturnType>;
}

export interface EntityRequestionFunction {
  <ReturnType>(
    url: string,
    idOrEntity?: string | any,
    options?: Options
  ): Promise<ReturnType>;
}
export type Client = Record<
  HTTPAlias | 'deleteEntity',
  GotRequestFunction | EntityRequestionFunction
> & {
  getNewToken: (
    clientId: string,
    clientSecret: string,
    refresh_token: string
  ) => Promise<AuthResponse>;
};
