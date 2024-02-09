import { AccountsApi, Configuration, axiosRetry, Paginator, SearchApi, TransformsApi, TransformsApiCreateTransformRequest, Search, IdentityDocument, TransformsBetaApi, GovernanceGroupsBetaApi, GovernanceGroupsV2Api} from "sailpoint-api-client"

const createTransform = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsApi(apiConfig)
    let transform: TransformsApiCreateTransformRequest = 
    {
        transform:
        {
            name: "Test Transform",
            type: "dateFormat",
            attributes: {
                inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",
                outputFormat: "yyyy/dd/MM"
            }
        }
    }
    const val = await api.createTransform(transform)
    console.log(val.data)
}

const search = async () => {
    let apiConfig = new Configuration()
    let api = new SearchApi(apiConfig)
    let search: Search = {
        indices: [
            "identities"
        ],
        query: {
            query: "*"
        },
        sort: ["-name"]
	}
    const val = await Paginator.paginateSearchApi(api, search, 100, 1000)

    for (const result of val.data) {
        const castedResult: IdentityDocument = result
        console.log(castedResult.name)
    }
    
}

const getPaginatedAccounts = async () => {

    
    let apiConfig = new Configuration()
    apiConfig.retriesConfig = {
        retries: 4,
        retryDelay: axiosRetry.exponentialDelay,
        onRetry(retryCount, error, requestConfig) {
            console.log(`retrying due to request error, try number ${retryCount}`)
        },
    }
    let api = new AccountsApi(apiConfig)

    
    const val = await Paginator.paginate(api, api.listAccounts, {limit: 20, sorters: "created"}, 10)

    console.log(val.data)

}


const getPaginatedTransforms = async () => {

    
    let apiConfig = new Configuration()
    apiConfig.retriesConfig = {
        retries: 4,
        retryDelay: axiosRetry.exponentialDelay,
        onRetry(retryCount, error, requestConfig) {
            console.log(`retrying due to request error, try number ${retryCount}`)
        },
    }
    let api = new TransformsApi(apiConfig)
    
    const val = await Paginator.paginate(api, api.listTransforms, {limit: 250}, 100)

    console.log(val.data.length)

}

const listTransforms = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsBetaApi(apiConfig)
   
    const val = await api.listTransforms()
    console.log(val.data)
}

const listGovernanceGroups = async () => {

    let apiConfig = new Configuration()
    let api = new GovernanceGroupsV2Api(apiConfig)
   
    const val = await api.listWorkgroups()
    console.log(val.data)
}






getPaginatedAccounts()