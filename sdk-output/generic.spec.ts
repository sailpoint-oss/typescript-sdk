import axios from "axios"
import type { InternalAxiosRequestConfig } from "axios"
import { Configuration, GenericApi, DefaultApi } from "./index"

// Captures each request instead of sending it, so these tests need no tenant.
const captureRequests = () => {
    const requests: InternalAxiosRequestConfig[] = []
    const instance = axios.create({
        adapter: async (config) => {
            requests.push(config)
            return { data: { ok: true }, status: 200, statusText: 'OK', headers: {}, config }
        },
    })
    const config = new Configuration({ baseurl: 'https://acme.api.identitynow.com', accessToken: 'token-1' })
    config.axiosInstance = instance
    return { api: new GenericApi(config, undefined, instance), requests }
}

describe('generic', () => {
    it('keeps the slashes of a multi-segment path and adds no version', async () => {
        const { api, requests } = captureRequests()

        const resp = await api.genericGet({ path: '/entitlements/v1/identities/2c91808a/entitlements', limit: 10, filters: 'name eq "x"' })

        expect(resp.data).toStrictEqual({ ok: true })
        const url = new URL(requests[0].url!)
        expect(url.origin + url.pathname).toStrictEqual('https://acme.api.identitynow.com/entitlements/v1/identities/2c91808a/entitlements')
        expect(url.searchParams.get('limit')).toStrictEqual('10')
        expect(url.searchParams.get('filters')).toStrictEqual('name eq "x"')
        expect(requests[0].headers['Authorization']).toStrictEqual('Bearer token-1')
    })

    it('encodes each segment and keeps a query string from the path', async () => {
        const { api, requests } = captureRequests()

        await api.genericGet({ path: 'accounts/v1/a b?detailLevel=SLIM', limit: 5 })

        const url = new URL(requests[0].url!)
        expect(url.pathname).toStrictEqual('/accounts/v1/a%20b')
        expect(url.searchParams.get('detailLevel')).toStrictEqual('SLIM')
        expect(url.searchParams.get('limit')).toStrictEqual('5')
    })

    it('sends a JSON Patch list with the json-patch content type', async () => {
        const { api, requests } = captureRequests()
        const patch = [{ op: 'replace', path: '/description', value: 'New' }]

        await api.genericPatch({ path: 'transforms/v1/1234', requestBody: patch })

        expect(requests[0].method).toStrictEqual('patch')
        expect(requests[0].headers['Content-Type']).toStrictEqual('application/json-patch+json')
        expect(JSON.parse(requests[0].data)).toStrictEqual(patch)
    })

    it('sends a POST body as JSON to a v2 path', async () => {
        const { api, requests } = captureRequests()

        await api.genericPost({ path: 'sources/v2/2c91808a/provisioning-policies', requestBody: { name: 'Test', type: 'lower' } })

        expect(requests[0].method).toStrictEqual('post')
        expect(requests[0].url).toStrictEqual('https://acme.api.identitynow.com/sources/v2/2c91808a/provisioning-policies')
        expect(JSON.parse(requests[0].data)).toStrictEqual({ name: 'Test', type: 'lower' })
    })

    it('keeps DefaultApi as an alias of GenericApi', () => {
        expect(DefaultApi).toBe(GenericApi)
    })
})
