import { KyInstance, Options } from 'ky';

import { AuthResponse } from './payment';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
export type QuickbooksArgs = {
  accessToken: string;
  baseUrl?: string;
  debug: boolean; // enable debugging?
  defaults?: Options;
  needNewToken?: (
    getNewToken: (
      clientId: string,
      clientSecret: string,
      refresh_token: string
    ) => Promise<AuthResponse | undefined>
  ) => Promise<string>;
  realmId: string;
  useSandbox: boolean; // use the sandbox?
};

export interface KyRequestFunction {
  <ReturnType>(url: string, options?: Options): Promise<ReturnType>;
}

export interface EntityRequestionFunction {
  <ReturnType>(
    url: string,
    idOrEntity?: string | any,
    options?: Options
  ): Promise<ReturnType>;
}
export type Client = {
  deleteEntity: EntityRequestionFunction;
  extend: (defaultOptions: Options) => KyInstance;
  get: KyRequestFunction;
  post: KyRequestFunction;
  put: KyRequestFunction;
  delete: KyRequestFunction;
  patch: KyRequestFunction;
  head: KyRequestFunction;
};

export type HTTPAlias = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head';
