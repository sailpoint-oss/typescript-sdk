import { AccountsBetaApi, ConnectorsBetaApi, GovernanceGroupsV2Api, IdentityProfilesBetaApi, Paginator, Search, SourcesBetaApi, TransformsApi } from "./index"
import { AccountsApi, Configuration, SearchApi } from "./index"

describe('Test_v3', () => {
    it('Test List Accounts', async () => {
        let apiConfig = new Configuration()
        let api = new AccountsApi(apiConfig)
        
        const resp = await api.listAccounts({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test paginate search API', async () => {
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
        const resp = await Paginator.paginateSearchApi(api, search, 10, 100)
    
        expect(resp.data.length).toStrictEqual(100)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test List Transforms', async () => {
        let apiConfig = new Configuration()
        let api = new TransformsApi(apiConfig)
        
        const resp = await api.listTransforms({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test Pagination', async () => {
        let apiConfig = new Configuration()
        let api = new AccountsApi(apiConfig)
        
        const resp = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10)
    
        expect(resp.data.length).toStrictEqual(100)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('Test_beta', () => {
    it('Test List Accounts', async () => {
        let apiConfig = new Configuration()
        let api = new AccountsBetaApi(apiConfig)
        
        const resp = await api.listAccounts({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)


    it('Test connector api', async () => {
        let apiConfig = new Configuration()
        let api = new ConnectorsBetaApi(apiConfig)
        
        const resp = await api.getConnectorList({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test List Sources', async () => {
        let apiConfig = new Configuration()
        let api = new SourcesBetaApi(apiConfig)
        
        const resp = await api.listSources({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test Pagination', async () => {
        let apiConfig = new Configuration()
        let api = new IdentityProfilesBetaApi(apiConfig)
        
        const resp = await Paginator.paginate(api, api.listIdentityProfiles, {limit: 5}, 1)
    
        expect(resp.data.length).toStrictEqual(5)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('Test_v2', () => {
    it('Test List Workgroups', async () => {
        let apiConfig = new Configuration()
        let api = new GovernanceGroupsV2Api(apiConfig)
        
        const resp = await api.listWorkgroups({limit: 2})
    
        expect(resp.data.length).toStrictEqual(2)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})