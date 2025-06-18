import { AccountsApi, AccountsBetaApi, AccountsV2024Api, Configuration, ConnectorsBetaApi, IdentitiesV2024Api, IdentityProfilesBetaApi, Paginator, Search, SearchApi, SearchV2024, SearchV2024Api, SearchV2025, SearchV2025Api, SourcesBetaApi, TransformsApi, TransformsV2024Api } from "./index"

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


describe('Test_v2024', () => {
    it('Test List Accounts', async () => {
        let apiConfig = new Configuration()
        let api = new AccountsV2024Api(apiConfig)
        
        const resp = await api.listAccounts({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test List Transforms', async () => {
        let apiConfig = new Configuration()
        let api = new TransformsV2024Api(apiConfig)
        
        const resp = await api.listTransforms({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('Test List Identities without experimental flag set', async () => {
        let apiConfig = new Configuration()
        let api = new AccessModelMetadataV2024Api(apiConfig);
        
        await expect(api.listAccessModelMetadataAttribute()).rejects.toThrow(
            "You are using Experimental APIs. Set configuration.experimental = True to enable these APIs in the SDK."
        );
    }, 30000)

    it('Test List Identities without experimental flag set', async () => {
        let apiConfig = new Configuration()
        apiConfig.experimental = true
        let api = new IdentitiesV2024Api(apiConfig);
        
        const resp = await api.listIdentities({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)


    it('Test paginate search API with V2024', async () => {
        let apiConfig = new Configuration()
        let api = new SearchV2024Api(apiConfig)
        
        let search: SearchV2024 = {
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
})


describe('Test_v2025', () => {

        it('Test paginate search API with V2025', async () => {
        let apiConfig = new Configuration()
        let api = new SearchV2025Api(apiConfig)
        
        let search: SearchV2025 = {
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
})