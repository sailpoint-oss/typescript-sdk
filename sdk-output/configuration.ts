import axios from "axios";

export interface ConfigurationParameters {
    tenant?: string;
    clientId?: string;
    clientSecret?: string;
}

export class Configuration {

    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
     apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);

    /**
     * parameter for tenant
     * @param name security name
     * @memberof Configuration
     */
     tenant?: string;
     /**
      * parameter for clientId
      *
      * @type {string}
      * @memberof Configuration
      */
    clientId?: string;
     /**
      * parameter for clientSecret
      *
      * @type {string}
      * @memberof Configuration
      */
    clientSecret?: string;
     /**
      * parameter for clientSecret
      *
      * @type {string}
      * @memberof Configuration
      */
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
     accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);

    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
     username?: string;
     /**
      * parameter for basic security
      *
      * @type {string}
      * @memberof Configuration
      */
     password?: string;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
     basePathBeta?: string;
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
     basePathV3?: string;
     /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
     basePathV2?: string;
     /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
     basePathCC?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;


    constructor(param: ConfigurationParameters = {}) {
        this.tenant = param.tenant;
        this.basePathBeta = `https://${this.tenant}.api.identitynow.com/beta`
        this.basePathV3 = `https://${this.tenant}.api.identitynow.com/v3`
        this.basePathV2 = `https://${this.tenant}.api.identitynow.com/v2`
        this.basePathCC = `https://${this.tenant}.api.identitynow.com`
        this.clientId = param.clientId;
        this.clientSecret = param.clientSecret;
        const url = `https://${this.tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
        this.accessToken = this.getAccessToken();
    }

    private async getAccessToken(): Promise<string> {
        try {
            const url = `https://${this.tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
            const {data, status} = await axios.post(url)
            if (status === 200) {
                return data.access_token;
            } else {
                throw new Error("Unauthorized")
            }
        } catch (error) {
            console.error("Unable to fetch access token.  Aborting.");
            throw new Error(error);
        }
    }


    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
     public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
