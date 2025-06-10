import type { AxiosResponse, RawAxiosRequestConfig } from "axios";
import {
  Search,
  SearchApi,
  SearchApiSearchPostRequest,
  SearchDocument,
} from "./v3";

import {
  SearchDocumentV2024,
  SearchV2024,
  SearchV2024Api,
  SearchV2024ApiSearchPostRequest,
} from "./v2024/api";

import {
  SearchDocumentV2025,
  SearchV2025,
  SearchV2025Api,
  SearchV2025ApiSearchPostRequest,
} from "./v2025/api";

export interface PaginationParams {
  /**
   * Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   * @type {number}
   * @memberof AccountsApiListAccounts
   */
  limit?: number;
  /**
   * Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   * @type {number}
   * @memberof AccountsApiListAccounts
   */
  offset?: number;
  /**
   * If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   * @type {boolean}
   * @memberof AccountsApiListAccounts
   */
  count?: boolean;
  /**
   * Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **identityId**: *eq*  **name**: *eq, in*  **nativeIdentity**: *eq, in*  **sourceId**: *eq, in*  **uncorrelated**: *eq*
   * @type {string}
   * @memberof AccountsApiListAccounts
   */
  filters?: string;
  axiosOptions?: RawAxiosRequestConfig;
}

export interface ExtraParams {
  [key: string]: any;
}

interface SearchApiTypeMap {
  SearchApi: {
    search: Search;
    searchParams: SearchApiSearchPostRequest;
    document: SearchDocument;
  };
  SearchV2024Api: {
    search: SearchV2024;
    searchParams: SearchV2024ApiSearchPostRequest;
    document: SearchDocumentV2024;
  };
  SearchV2025Api: {
    search: SearchV2025;
    searchParams: SearchV2025ApiSearchPostRequest;
    document: SearchDocumentV2025;
  };
}

// Create a union type for all possible API types
type ApiType = keyof SearchApiTypeMap;

// Define the actual API instances mapping
type ApiInstanceMap = {
  SearchApi: SearchApi;
  SearchV2024Api: SearchV2024Api;
  SearchV2025Api: SearchV2025Api;
};

export class Paginator {
  public static async paginate<
    T,
    TResult,
    A extends PaginationParams & ExtraParams
  >(
    thisArg: T,
    callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>,
    args?: A,
    increment?: number
  ): Promise<AxiosResponse<TResult[], any>> {
    let params: PaginationParams = args ? args : { limit: 0, offset: 0 };
    const maxLimit = params && params.limit ? params.limit : 0;
    if (!params.offset) {
      params.offset = 0;
    }
    if (!increment) {
      increment = 250;
    }
    params.limit = increment;

    let modified: TResult[] = [];
    while (true) {
      console.log(`Paginating call, offset = ${params.offset}`);
      let results = await callbackFn.call(thisArg, params);
      modified.push.apply(modified, results.data);
      if (
        results.data.length < increment ||
        (modified.length >= maxLimit && maxLimit > 0)
      ) {
        results.data = modified;
        return results;
      }
      params.offset += increment;
    }
  }

  public static async paginateSearchApi<T extends ApiType>(
    searchAPI: ApiInstanceMap[T],
    search: SearchApiTypeMap[T]['search'],
    increment?: number,
    limit?: number
  ): Promise<AxiosResponse<SearchApiTypeMap[T]['document'][], any>> {
    increment = increment ? increment : 250;
    
    let offset = 0;
    const maxLimit = limit ? limit : 0;
    let modified: SearchApiTypeMap[T]['document'][] = [];

    if (!search.sort || search.sort.length != 1) {
      throw "search must include exactly one sort parameter to paginate properly";
    }

    while (true) {
      console.log(`Paginating call, offset = ${offset}`);
      let results: AxiosResponse<SearchApiTypeMap[T]['document'][], any>;
      
      // Handle each API type separately to avoid type conflicts
      if (searchAPI instanceof SearchApi) {
        const searchParams: SearchApiSearchPostRequest = {
          search: search as Search,
          limit: increment,
        };
        results = await (searchAPI as SearchApi).searchPost(searchParams) as AxiosResponse<SearchApiTypeMap[T]['document'][], any>;
      } else if (searchAPI instanceof SearchV2024Api) {
        const searchParams: SearchV2024ApiSearchPostRequest = {
          searchV2024: search as SearchV2024,
          limit: increment,
        };
        results = await (searchAPI as SearchV2024Api).searchPost(searchParams) as AxiosResponse<SearchApiTypeMap[T]['document'][], any>;
      } else if (searchAPI instanceof SearchV2025Api) {
        const searchParams: SearchV2025ApiSearchPostRequest = {
          searchV2025: search as SearchV2025,
          limit: increment,
        };
        results = await (searchAPI as SearchV2025Api).searchPost(searchParams) as AxiosResponse<SearchApiTypeMap[T]['document'][], any>;
      } else {
        throw new Error("Unsupported API type");
      }
      
      modified.push.apply(modified, results.data);
      
      if (
        results.data.length < increment ||
        (modified.length >= maxLimit && maxLimit > 0)
      ) {
        results.data = modified;
        return results;
      } else {
        const result = <any>results.data[results.data.length - 1];
        if (search.sort) {
          (search as any).searchAfter = [
            result[search.sort[0].replace("-", "")],
          ];
        } else {
          throw "search unexpectedly did not return a result we can search after!";
        }
      }
      offset += increment;
    }
  }
}
