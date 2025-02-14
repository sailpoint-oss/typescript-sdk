import type { AxiosResponse, RawAxiosRequestConfig } from "axios";
import {
  Search,
  SearchApi,
  SearchApiSearchPostRequest,
  SearchDocument,
} from "./v3";

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

export class Paginator {
  /**
   * Generator function that yields each page of results as it paginates through the API responses.
   * Use this function for memory-efficient pagination.
   */
  public static async *paginateEach<
    T,
    TResult,
    A extends PaginationParams & ExtraParams
  >(
    thisArg: T,
    callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>,
    args?: A,
    increment?: number
  ): AsyncGenerator<TResult[], void, unknown> {
    let params: PaginationParams = args ? args : { limit: 0, offset: 0 };
    const maxLimit = params.limit ? params.limit : 0;
    if (!params.offset) {
      params.offset = 0;
    }
    if (!increment) {
      increment = 250;
    }
    params.limit = increment;

    while (true) {
      console.log(`Paginating call, offset = ${params.offset}`);
      let results = await callbackFn.call(thisArg, params);
      yield results.data;

      // Break if the response contains fewer results than the increment or if the max limit is reached
      if (
        results.data.length < increment ||
        (params.offset! + results.data.length >= maxLimit && maxLimit > 0)
      ) {
        break;
      }

      params.offset += increment;
    }
  }

  /**
   * Collects all paginated results and returns them as a single array.
   * This function is compatible with existing implementations that expect all data at once.
   */
  public static async paginate<
    T,
    TResult,
    A extends PaginationParams & ExtraParams
  >(
    thisArg: T,
    callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>,
    args?: A,
    increment?: number
  ): Promise<TResult[]> {
    const allData: TResult[] = [];
    for await (const page of this.paginateEach(thisArg, callbackFn, args, increment)) {
      allData.push(...page);
    }
    return allData;
  }

  /**
   * Paginates through search results and collects them into a single array.
   * Compatible with existing implementations.
   */
  public static async paginateSearchApi(
    searchAPI: SearchApi,
    search: Search,
    increment?: number,
    limit?: number
  ): Promise<SearchDocument[]> {
    const allData: SearchDocument[] = [];
    for await (const page of this.paginateEachSearchApi(searchAPI, search, increment, limit)) {
      allData.push(...page);
    }
    return allData;
  }

  /**
   * Generator function that yields each page of search results as it paginates through the API responses.
   * Use this function for memory-efficient pagination.
   */
  public static async *paginateEachSearchApi(
    searchAPI: SearchApi,
    search: Search,
    increment?: number,
    limit?: number
  ): AsyncGenerator<SearchDocument[], void, unknown> {
    increment = increment ? increment : 250;
    const searchParams: SearchApiSearchPostRequest = {
      search: search,
      limit: increment,
    };
    let offset = 0;
    const maxLimit = limit ? limit : 0;

    if (!search.sort || search.sort.length !== 1) {
      throw new Error("Search must include exactly one sort parameter to paginate properly");
    }

    while (true) {
      console.log(`Paginating call, offset = ${offset}`);
      let results = await searchAPI.searchPost(searchParams);
      yield results.data;

      // Break if the response contains fewer results than the increment or if the max limit is reached
      if (
        results.data.length < increment ||
        (offset + results.data.length >= maxLimit && maxLimit > 0)
      ) {
        break;
      } else {
        const lastResult = results.data[results.data.length - 1];
        if (searchParams.search.sort) {
          searchParams.search.searchAfter = [
            (lastResult as any)[searchParams.search.sort[0].replace("-", "")]
          ];
        } else {
          throw new Error("Search unexpectedly did not return a result we can search after!");
        }
      }
      offset += increment;
    }
  }
}
