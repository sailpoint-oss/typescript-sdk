import { Search, SearchApi, SearchApiSearchPostRequest, SearchDocument } from "./v3";

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
}

export interface AxiosResponse<T = any, D = any>  {
    data: T;
    status: number;
    statusText: string;
    request?: any;
    headers: AxiosResponseHeaders;
  }
  export type AxiosResponseHeaders = Record<string, string> & {
    "set-cookie"?: string[]
  };

export class Paginator {

    public static async paginate<T, TResult, A extends PaginationParams>(thisArg: T, callbackFn: (this: T, args: A) => Promise<AxiosResponse<TResult[], any>>, args?: A, increment?: number): Promise<AxiosResponse<TResult[], any>> {
        let params: PaginationParams = args ? args : {limit: 0, offset: 0}
        const maxLimit = params && params.limit ? params.limit : 0
        if (!params.offset) {
            params.offset = 0
        }
        if (!increment) {
            increment = 250
        }
        params.limit = increment
    
        let modified: TResult[] = []
        while (true) {
            console.log(`Paginating call, offset = ${params.offset}`)
            let results = await callbackFn.call(thisArg, params)
            modified.push.apply(modified, results.data)
            if (results.data.length < increment || (params.offset >= maxLimit && maxLimit > 0)) {
                results.data = modified
                return results
            }
            params.offset += increment
        }
    }

    public static async paginateSearchApi(searchAPI: SearchApi, search: Search, increment?: number, limit?: number): Promise<AxiosResponse<SearchDocument[], any>> {
        increment = increment ? increment : 250
        const searchParams: SearchApiSearchPostRequest = {
            search: search,
            limit: increment
        }
        let offset = 0 
        const maxLimit = limit ? limit : 0
        let modified: SearchDocument[] = []
    
        if (!search.sort || search.sort.length != 1) {
            throw("search must include exactly one sort parameter to paginate properly")
        }
    
        while (true) {
            console.log(`Paginating call, offset = ${offset}`)
            let results = await searchAPI.searchPost(searchParams)
            if (results.data.length < increment || (offset >= maxLimit && maxLimit > 0)) {
                results.data = modified
                return results
            } else {
                const result = <any>results.data[results.data.length - 1]
                if (searchParams.search.sort) {
                    searchParams.search.searchAfter = [result[searchParams.search.sort[0].replace("-", "")]]
                } else {
                    throw("search unexpectedly did not return a result we can search after!")
                }
            }
            modified.push.apply(modified, results.data)
            offset += increment
        }
    }
}