import { Configuration } from "./configuration"
import type { SailPointConfigProvider, SailPointWindowConfig } from "./configuration"
import { setBearerAuthToObject } from "./accounts/common"

// Jest runs in the node environment, so `window` is absent unless a test adds it.
const setWindowProvider = (provider: SailPointConfigProvider) => {
    (globalThis as any).window = { sailpointConfig: provider }
}

afterEach(() => {
    delete (globalThis as any).window
})

describe('autoconfigure', () => {
    it('reads base urls from window.sailpointConfig()', () => {
        setWindowProvider(() => ({
            baseurl: 'https://acme.api.identitynow.com',
            nermBaseurl: 'https://acme.nonemployee.com/api',
            accessToken: 'token-1',
        }))

        const config = new Configuration()

        expect(config.basePath).toStrictEqual('https://acme.api.identitynow.com')
        expect(config.nermBasePath).toStrictEqual('https://acme.nonemployee.com/api')
        expect(typeof config.accessToken).toStrictEqual('function')
    })

    it('fetches a new access token on every request', async () => {
        let calls = 0
        setWindowProvider(() => ({
            baseurl: 'https://acme.api.identitynow.com',
            accessToken: `token-${++calls}`,
        }))

        const config = new Configuration()
        const seedCalls = calls

        const first: any = {}
        const second: any = {}
        await setBearerAuthToObject(first, config)
        await setBearerAuthToObject(second, config)

        expect(first['Authorization']).toStrictEqual(`Bearer token-${seedCalls + 1}`)
        expect(second['Authorization']).toStrictEqual(`Bearer token-${seedCalls + 2}`)
        expect(calls).toStrictEqual(seedCalls + 2)
    })

    it('awaits an async provider before exposing base urls', async () => {
        setWindowProvider(async () => ({
            baseurl: 'https://acme.api.identitynow.com',
            nermBaseurl: 'https://acme.nonemployee.com/api',
            accessToken: 'token-async',
        }))

        const config = await Configuration.autoconfigure()

        expect(config.basePath).toStrictEqual('https://acme.api.identitynow.com')
        expect(config.nermBasePath).toStrictEqual('https://acme.nonemployee.com/api')

        const headers: any = {}
        await setBearerAuthToObject(headers, config)
        expect(headers['Authorization']).toStrictEqual('Bearer token-async')
    })

    it('picks up base urls that the host rotates between requests', async () => {
        let baseurl = 'https://acme.api.identitynow.com'
        setWindowProvider(() => ({ baseurl, accessToken: 'token' }))

        const config = new Configuration()
        expect(config.basePath).toStrictEqual('https://acme.api.identitynow.com')

        baseurl = 'https://acme-eu.api.identitynow.com'
        await setBearerAuthToObject({}, config)

        expect(config.basePath).toStrictEqual('https://acme-eu.api.identitynow.com')
    })

    it('surfaces a clear error when the provider returns no token', async () => {
        setWindowProvider(() => ({ baseurl: 'https://acme.api.identitynow.com' } as SailPointWindowConfig))

        const config = new Configuration()

        await expect(setBearerAuthToObject({}, config)).rejects.toThrow(
            'window.sailpointConfig() did not return an accessToken.'
        )
    })

    it('defers to explicitly supplied parameters', async () => {
        setWindowProvider(() => ({
            baseurl: 'https://window.api.identitynow.com',
            accessToken: 'window-token',
        }))

        const config = new Configuration({
            baseurl: 'https://explicit.api.identitynow.com',
            accessToken: 'explicit-token',
        })

        expect(config.basePath).toStrictEqual('https://explicit.api.identitynow.com')

        const headers: any = {}
        await setBearerAuthToObject(headers, config)
        expect(headers['Authorization']).toStrictEqual('Bearer explicit-token')
    })

    it('is inert when the host page exposes no provider', () => {
        (globalThis as any).window = {}

        const config = new Configuration({ baseurl: 'https://acme.api.identitynow.com' })

        expect(config.basePath).toStrictEqual('https://acme.api.identitynow.com')
        expect(config.accessToken).toBeUndefined()
    })
})
