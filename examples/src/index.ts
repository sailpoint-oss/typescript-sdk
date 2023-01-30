import { AccountsApi, Configuration } from "sailpoint-api-client"

const account = async () => {

    let apiConfig = new Configuration()

    let api = new AccountsApi(apiConfig)


    const val = await api.listAccounts({limit: 0})
    console.log(val)

}
var text = account()