import { AccountsV3, Configuration } from "sailpoint-sdk"

const account = async () => {

    let apiConfig = new Configuration(
        {
            "tenant": "devrel", 
            "clientId": "", 
            "clientSecret": ""
        })

    //let api = new SourcesApi(apiConfig)
    const config = await apiConfig.getV3Config()
    let api = new AccountsV3(config)

    const val = await api.listAccounts()
    console.log(val)

}
var text = account()