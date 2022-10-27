import axios from "axios";
import {Configuration as ConfigurationBeta, ConfigurationParameters as ConfigurationParametersBeta} from "./beta/configuration";
import {Configuration as ConfigurationV3, ConfigurationParameters as ConfigurationParametersV3} from "./v3/configuration";

export interface ConfigurationParameters {
    tenant?: string;
    clientId?: string;
    clientSecret?: string;
}

export class Configuration {

    v3Config = new ConfigurationV3
    betaConfig = new ConfigurationBeta

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



    constructor(param: ConfigurationParameters = {}) {
        this.tenant = param.tenant;
        this.betaConfig.basePath = `https://${this.tenant}.api.identitynow.com/beta/`
        this.v3Config.basePath = `https://${this.tenant}.api.identitynow.com/v3/`
        this.clientId = param.clientId;
        this.clientSecret = param.clientSecret;
    }

    public async getAccessToken() {
        try {
            const url = `https://${this.tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
            const {data, status} = await axios.post(url)
            if (status === 200) {
                this.accessToken = data.access_token;
                this.betaConfig.accessToken = this.accessToken
                this.v3Config.accessToken = this.accessToken
            } else {
                throw new Error("Unauthorized")
            }
        } catch (error) {
            console.error("Unable to fetch access token.  Aborting.");
            throw new Error(error);
        }
    }

    public async getBetaConfig(): Promise<ConfigurationBeta> {
        if (!this.accessToken) {
            await this.getAccessToken()
        }
        return this.betaConfig
    }
    public async getV3Config(): Promise<ConfigurationV3> {
        if (!this.accessToken) {
            await this.getAccessToken()
        }
        return this.v3Config
    }
}
