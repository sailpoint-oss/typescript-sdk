import axios from "axios";
import * as os from 'os';
import * as path from 'path';
import * as yaml from "js-yaml";
import * as fs from "fs";
import { IAxiosRetryConfig } from "axios-retry";

export interface ConfigurationParameters {
    baseurl?: string;
    clientId?: string;
    clientSecret?: string;
    accessToken?: string;
    tokenUrl?: string;
}

export interface Configuration {
    authtype?: "pat" | "oauth";
    debug?: boolean;
    pat?: PAT;
}

export interface PAT {
    baseurl?: string;
    clientid?: string;
    clientsecret?: string;
    tenant?: string;
    token?: Token;
    tokenurl?: string;
}
export interface Token {
    accesstoken?: string;
    expiry?: Date;
}
export interface Oauth {
    authurl?: string;
    baseurl?: string;
    clientid?: string;
    clientsecret?: string;
    redirect?: Redirect;
    tenant?: string;
    token?: Token;
}

export interface Redirect {
    path?: string;
    port?: number;
}

export class Configuration {

    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
     apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);

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
      * parameter for clientId
      *
      * @type {string}
      * @memberof Configuration
      */
    tokenUrl?: string;
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
    /**
     * axios retry configuration
     *
     * @type {IAxiosRetryConfig}
     * @memberof Configuration
     */
    retriesConfig?: IAxiosRetryConfig

    constructor(param?: ConfigurationParameters) {

        if (!param) {
            param = this.getParams()
        }

        this.basePathBeta = param.baseurl + `/beta`
        this.basePathV3 = param.baseurl + `/v3`
        this.basePathV2 = param.baseurl + `/v2`
        this.basePathCC = param.baseurl
        this.tokenUrl = param.tokenUrl
        this.clientId = param.clientId;
        this.clientSecret = param.clientSecret;
        const url = `${this.tokenUrl}?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
        if (!this.accessToken) {
            this.accessToken = this.getAccessToken(url);
        }
        
    }

    private getParams(): ConfigurationParameters {
        const config: ConfigurationParameters = {}
        try {
            const homeDir = os.homedir()
            const configPath = path.join(homeDir, '.sailpoint','config.yaml')
            const doc = yaml.load(fs.readFileSync(configPath, 'utf8')) as Configuration
            if (doc.authtype && doc.authtype.toLowerCase() === 'pat') {
                config.baseurl = doc.pat.baseurl
                config.clientId = doc.pat.clientid
                config.clientSecret = doc.pat.clientsecret
                config.tokenUrl = doc.pat.tokenurl
            }   
        } catch (error) {
            console.log('unable to find config file')
        }
        config.baseurl = process.env["BASE_URL"] ? process.env["BASE_URL"] : config.baseurl
        config.tokenUrl = process.env["TOKEN_URL"] ? process.env["TOKEN_URL"] : config.tokenUrl
        config.clientId = process.env["CLIENT_ID"] ? process.env["CLIENT_ID"] : config.clientId
        config.clientSecret = process.env["CLIENT_SECRET"] ? process.env["CLIENT_SECRET"] : config.clientSecret

        return config
    }

    private async getAccessToken(url: string): Promise<string> {
        try {
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
