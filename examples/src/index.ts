import { AccountsApi, Configuration, Paginator, Search1, SearchApi, TransformsApi, TransformsApiCreateTransformRequest } from "sailpoint-api-client"

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
    console.log(val)
}

const search = async () => {
    let apiConfig = new Configuration()
    let api = new SearchApi(apiConfig)
    let search: Search1 = {
        indices: [
            "identities"
        ],
        query: {
            query: "\"philip.ellis\"",
            fields: [
            "name"
            ]
        }
	}
    const val = await Paginator.paginate(api, api.searchPost, {search1: search})
    console.log(val)
}

const getPaginatedAccounts = async () => {

    
    let apiConfig = new Configuration()
    let api = new AccountsApi(apiConfig)
    
    const val = await Paginator.paginate(api, api.listAccounts, {limit: 500}, 100)

    console.log(val)

}


getPaginatedAccounts()