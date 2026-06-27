import type { AxiosResponse, RawAxiosRequestConfig } from "axios";
import {
  Search,
  SearchApi,
  SearchApiSearchPostV1Request,
} from "./search/api";

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
    searchParams: SearchApiSearchPostV1Request;
    document: object;
  };
}

type ApiType = keyof SearchApiTypeMap;

type ApiInstanceMap = {
  SearchApi: SearchApi;
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
    let lastResults: AxiosResponse<TResult[], any> | undefined;
    while (true) {
      let results: AxiosResponse<TResult[], any>;
      try {
        results = await callbackFn.call(thisArg, params);
      } catch (e: any) {
        // When total results are an exact multiple of increment, some APIs return a
        // 4xx error instead of an empty array for the out-of-bounds offset request.
        // Return whatever we've accumulated rather than surfacing the error.
        if (lastResults && modified.length > 0 && e?.response?.status >= 400 && e?.response?.status < 500) {
          lastResults.data = modified;
          return lastResults;
        }
        throw e;
      }
      lastResults = results;
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

  public static async *paginateGenerator<
    T,
    TResult,
    A extends PaginationParams & ExtraParams
  >(
    thisArg: T,
    callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>,
    args?: A,
    increment?: number
  ) {
    let params: PaginationParams = args ? args : { limit: 0, offset: 0 };
    const maxLimit = params && params.limit ? params.limit : 0;
    if (!params.offset) {
      params.offset = 0;
    }
    if (!increment) {
      increment = 250;
    }
    params.limit = increment;

    let totalYielded = 0;
    while (true) {
      let results: AxiosResponse<TResult[], any>;
      try {
        results = await callbackFn.call(thisArg, params);
      } catch (e: any) {
        // When total results are an exact multiple of increment, some APIs return a
        // 4xx error instead of an empty array for the out-of-bounds offset request.
        if (totalYielded > 0 && e?.response?.status >= 400 && e?.response?.status < 500) {
          return;
        }
        throw e;
      }

      for (const item of results.data) {
        yield item;
        totalYielded++;

        if (maxLimit > 0 && totalYielded >= maxLimit) {
          return;
        }
      }

      if (results.data.length < increment) {
        return;
      }

      params.offset += increment;
    }
  }

  public static async paginateSearchApi<T extends ApiType>(
    searchAPI: ApiInstanceMap[T],
    search: SearchApiTypeMap[T]["search"],
    increment?: number,
    limit?: number
  ): Promise<AxiosResponse<SearchApiTypeMap[T]["document"][], any>> {
    increment = increment ? increment : 250;

    let offset = 0;
    const maxLimit = limit ? limit : 0;
    let modified: SearchApiTypeMap[T]["document"][] = [];
    let lastResults: AxiosResponse<SearchApiTypeMap[T]["document"][], any> | undefined;

    if (!search.sort || search.sort.length != 1) {
      throw "search must include exactly one sort parameter to paginate properly";
    }

    while (true) {
      console.log(`Paginating call, offset = ${offset}`);
      let results: AxiosResponse<SearchApiTypeMap[T]["document"][], any>;

      try {
        const searchParams: SearchApiSearchPostV1Request = {
          searchV1: search as Search,
          limit: increment,
        };
        results = (await (searchAPI as SearchApi).searchPostV1(
          searchParams
        )) as AxiosResponse<SearchApiTypeMap[T]["document"][], any>;
      } catch (e: any) {
        // When total results are an exact multiple of increment, some APIs return a
        // 4xx error instead of an empty array for the out-of-bounds offset request.
        if (lastResults && modified.length > 0 && e?.response?.status >= 400 && e?.response?.status < 500) {
          lastResults.data = modified;
          return lastResults;
        }
        throw e;
      }

      lastResults = results;
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

  public static async *paginateSearchApiGenerator<T extends ApiType>(
    searchAPI: ApiInstanceMap[T],
    search: SearchApiTypeMap[T]["search"],
    increment?: number,
    limit?: number
  ) {
    increment = increment ? increment : 250;

    let offset = 0;
    const maxLimit = limit ? limit : 0;
    let totalYielded = 0;

    if (!search.sort || search.sort.length != 1) {
      throw "search must include exactly one sort parameter to paginate properly";
    }

    while (true) {
      console.log(`Paginating call, offset = ${offset}`);
      let results: AxiosResponse<SearchApiTypeMap[T]["document"][], any>;

      try {
        const searchParams: SearchApiSearchPostV1Request = {
          searchV1: search as Search,
          limit: increment,
        };
        results = (await (searchAPI as SearchApi).searchPostV1(
          searchParams
        )) as AxiosResponse<SearchApiTypeMap[T]["document"][], any>;
      } catch (e: any) {
        // When total results are an exact multiple of increment, some APIs return a
        // 4xx error instead of an empty array for the out-of-bounds offset request.
        if (totalYielded > 0 && e?.response?.status >= 400 && e?.response?.status < 500) {
          return;
        }
        throw e;
      }

      for (const doc of results.data) {
        yield doc;
        totalYielded++;

        if (maxLimit > 0 && totalYielded >= maxLimit) {
          return;
        }
      }

      if (results.data.length < increment) {
        return;
      }

      const result = <any>results.data[results.data.length - 1];
      if (search.sort) {
        (search as any).searchAfter = [result[search.sort[0].replace("-", "")]];
      } else {
        throw "search unexpectedly did not return a result we can search after!";
      }

      offset += increment;
    }
  }
}
