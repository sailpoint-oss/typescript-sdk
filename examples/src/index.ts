import { AccountsBetaApi, Configuration } from "sailpoint-sdk"

const account = async () => {

    let apiConfig = new Configuration()

    let api = new AccountsBetaApi(apiConfig)

    const val = await api.listAccounts()
    console.log(val)

}
var text = account()