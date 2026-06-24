import { SailPoint, Configuration, Paginator, UsersNERMApi, DelegationsNERMV2025Api } from "./index"
import type { SearchV1 } from "./search/api"

describe('accounts', () => {
    it('list accounts', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.AccountsApi(apiConfig)

        const resp = await api.listAccountsV1({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)

    it('paginate accounts', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.AccountsApi(apiConfig)
        
        const resp = await Paginator.paginate(api, api.listAccountsV1, {limit: 100}, 10)
    
        expect(resp.data.length).toStrictEqual(100)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('connectors', () => {
    it('get connector list', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.ConnectorsApi(apiConfig)
        
        const resp = await api.getConnectorListV1({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('sources', () => {
    it('list sources', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.SourcesApi(apiConfig)
        
        const resp = await api.listSourcesV1({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('transforms', () => {
    it('list transforms', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.TransformsApi(apiConfig)
        
        const resp = await api.listTransformsV1({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('identities', () => {
    it('list identities with experimental flag', async () => {
        let apiConfig = new Configuration()
        apiConfig.experimental = true
        let api = new SailPoint.IdentitiesApi(apiConfig)
        
        const resp = await api.listIdentitiesV1({limit: 10})
    
        expect(resp.data.length).toStrictEqual(10)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('identity-profiles', () => {
    it('paginate identity profiles', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.IdentityProfilesApi(apiConfig)
        
        const resp = await Paginator.paginate(api, api.listIdentityProfilesV1, {limit: 3}, 1)
    
        expect(resp.data.length).toStrictEqual(3)
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('search', () => {
    it('paginate search API', async () => {
        let apiConfig = new Configuration()
        let api = new SailPoint.SearchApi(apiConfig)
        
        let search: SearchV1 = {
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
    }, 120000)
})

describe('access-model-metadata', () => {
    it('list access model metadata attributes with experimental flag', async () => {
        let apiConfig = new Configuration()
        apiConfig.experimental = true
        let api = new SailPoint.AccessModelMetadataApi(apiConfig)
        
        const resp = await api.listAccessModelMetadataAttributeV1()
    
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

describe('task-management', () => {
    it('get task status list with experimental flag', async () => {
        let apiConfig = new Configuration()
        apiConfig.experimental = true
        let api = new SailPoint.TaskManagementApi(apiConfig)

        const resp = await api.getTaskStatusListV1()
        expect(resp.status).toStrictEqual(200)
    }, 30000)
})

const _nermCheck = new Configuration()
const describeIfNerm = _nermCheck.nermBasePath ? describe : describe.skip

describeIfNerm('nerm', () => {
    it('list users', async () => {
        const apiConfig = new Configuration()
        const api = new UsersNERMApi(apiConfig)

        const resp = await api.getUsers({})

        expect(resp.status).toStrictEqual(200)
        expect(resp.data).toBeDefined()
    }, 30000)

    it('v2025 list delegations', async () => {
        const apiConfig = new Configuration()
        const api = new DelegationsNERMV2025Api(apiConfig)

        const resp = await api.delegationsGet({})

        expect(resp.status).toStrictEqual(200)
        expect(resp.data).toBeDefined()
    }, 30000)
})
