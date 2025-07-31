import { Configuration, DefaultApi, DefaultApiGenericGetRequest } from "sailpoint-api-client"

const listIdentities = async () => {
    let apiConfig = new Configuration()
    apiConfig.experimental = true // Enable experimental features
    let api = new DefaultApi(apiConfig)

    const request: DefaultApiGenericGetRequest = {
        path: "/v2025/ui-metadata/tenant",
    }
    const val = await api.genericGet(request)
    console.log(val.data)
}

listIdentities()