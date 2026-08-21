import axios, { AxiosInstance } from "axios";
import axiosRetry, { IAxiosRetryConfig } from "axios-retry";

/**
 * Access token handed to the generated API clients. When a function is given
 * it is invoked on every request, so the token it returns is always current.
 */
export type AccessTokenProvider =
  | string
  | Promise<string>
  | ((name?: string, scopes?: string[]) => string)
  | ((name?: string, scopes?: string[]) => Promise<string>);

/**
 * The values a host page hands to the SDK through `window.sailpointConfig()`.
 */
export interface SailPointWindowConfig {
  baseurl: string;
  nermBaseurl?: string;
  accessToken: string;
}

/**
 * `window.sailpointConfig`, exposed by the SailPoint Plugins SDK. It is a
 * function rather than a plain object so that every call can hand back a token
 * that has not expired. Its presence is what turns autoconfiguration on -
 * there is no separate flag to set.
 */
export type SailPointConfigProvider = () =>
  | SailPointWindowConfig
  | Promise<SailPointWindowConfig>;

declare global {
  interface Window {
    sailpointConfig?: SailPointConfigProvider;
  }
}

export interface ConfigurationParameters {
  baseurl?: string;
  nermBaseurl?: string;
  clientId?: string;
  clientSecret?: string;
  accessToken?: AccessTokenProvider;
  serverIndex?: number;
  tokenUrl?: string;
  consumerIdentifier?: string;
  consumerVersion?: string;
}

export interface Configuration {
  activeenvironment?: string;
  authtype?: string;
  customexporttemplatespath?: string;
  customsearchtemplatespath?: string;
  debug?: boolean;
  experimental?: boolean;
  environments?: { [key: string]: Environment };
  serverIndex?: number;
}

export interface Environment {
  baseurl: string;
  nermBaseurl: string;
  pat: Pat;
  tenanturl: string;
}

export interface Pat {
  clientid: string;
  clientsecret: string;
}

function isNodeRuntime(): boolean {
  return (
    typeof process !== "undefined" &&
    !!process.versions &&
    !!process.versions.node
  );
}

/**
 * Loads a Node module through an indirect require so that browser bundlers
 * never have to resolve Node built-ins. Returns undefined outside of Node.
 */
function loadNodeModule(id: string): any {
  if (!isNodeRuntime()) {
    return undefined;
  }
  try {
    const nodeRequire: any = require;
    return nodeRequire(id);
  } catch (error) {
    return undefined;
  }
}

/**
 * Looks up `window.sailpointConfig`, re-reading the property on every call so
 * the host page can swap the provider at any time. Returns undefined when not
 * running in a browser that exposes one.
 */
function getWindowConfigProvider(): SailPointConfigProvider | undefined {
  if (
    typeof window === "undefined" ||
    typeof window.sailpointConfig !== "function"
  ) {
    return undefined;
  }
  return () => window.sailpointConfig!();
}

function isThenable<T>(value: T | Promise<T>): value is Promise<T> {
  return !!value && typeof (value as Promise<T>).then === "function";
}

export class Configuration {
  /**
   * parameter for apiKey security
   * @param name security name
   * @memberof Configuration
   */
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);

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
  accessToken?: AccessTokenProvider;

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
  basePath?: string;

  /**
   * override base path for NERM
   *
   * @type {string}
   * @memberof Configuration
   */
  nermBasePath?: string;

  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  serverIndex?: number;
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
  retriesConfig?: IAxiosRetryConfig;
  /**
   * Shared axios instance pre-configured with retry logic.
   * All API classes use this instance by default.
   *
   * @type {AxiosInstance}
   * @memberof Configuration
   */
  axiosInstance: AxiosInstance;
  /**
   * Optional identifier for the application consuming this SDK (e.g. "sailpoint-cli").
   *
   * @type {string}
   * @memberof Configuration
   */
  consumerIdentifier?: string;
  /**
   * Optional version of the consuming application (e.g. "1.2.3").
   *
   * @type {string}
   * @memberof Configuration
   */
  consumerVersion?: string;
  /**
   * Resolves once configuration has finished loading. This only matters when
   * `window.sailpointConfig()` returns a promise: the API classes capture
   * `basePath` when they are constructed, so await this - or use
   * {@link Configuration.autoconfigure} - before creating them.
   *
   * @type {Promise<void>}
   * @memberof Configuration
   */
  ready: Promise<void>;

  constructor(param?: ConfigurationParameters) {
    this.consumerIdentifier = param?.consumerIdentifier;
    this.consumerVersion = param?.consumerVersion;

    this.axiosInstance = axios.create();
    axiosRetry(this.axiosInstance, this.retriesConfig);

    // A host page that exposes window.sailpointConfig() owns both the base
    // URLs and the token, so it wins unless the caller passed its own.
    const provider = getWindowConfigProvider();
    if (provider && !param?.baseurl && !param?.accessToken) {
      this.ready = this.enableAutoConfiguration(provider);
      return;
    }

    if (!param) {
      param = this.getParams();
    }

    this.accessToken = param.accessToken;
    this.basePath = param.baseurl;
    this.nermBasePath = param.nermBaseurl;
    this.tokenUrl = param.tokenUrl;
    this.clientId = param.clientId;
    this.clientSecret = param.clientSecret;

    if (
      !this.accessToken &&
      this.clientId &&
      this.clientSecret &&
      isNodeRuntime()
    ) {
      const url = `${this.tokenUrl}`;
      const FormDataCtor = loadNodeModule("form-data");
      const formData = new FormDataCtor();
      formData.append("grant_type", "client_credentials");
      formData.append("client_id", this.clientId);
      formData.append("client_secret", this.clientSecret);
      this.accessToken = this.getAccessToken(url, formData);
    }

    this.ready = Promise.resolve();
  }

  /**
   * Builds a Configuration and waits for an asynchronous
   * `window.sailpointConfig()` provider to resolve. Prefer this in the browser
   * so the base URLs are in place before any API class is constructed.
   */
  public static async autoconfigure(
    param?: ConfigurationParameters
  ): Promise<Configuration> {
    const configuration = new Configuration(param);
    await configuration.ready;
    return configuration;
  }

  /**
   * Wires the SDK up to `window.sailpointConfig()`. The access token becomes a
   * function so that it is re-read on every request and can never be stale.
   * The base URLs are seeded eagerly because the generated API classes read
   * `basePath` when they are constructed rather than per request.
   */
  private enableAutoConfiguration(
    provider: SailPointConfigProvider
  ): Promise<void> {
    this.accessToken = async () => {
      const windowConfig = await provider();
      this.applyWindowConfig(windowConfig);
      if (!windowConfig || !windowConfig.accessToken) {
        throw new Error(
          "window.sailpointConfig() did not return an accessToken."
        );
      }
      return windowConfig.accessToken;
    };

    try {
      const windowConfig = provider();
      if (isThenable(windowConfig)) {
        return windowConfig.then((resolved) =>
          this.applyWindowConfig(resolved)
        );
      }
      this.applyWindowConfig(windowConfig);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private applyWindowConfig(windowConfig?: SailPointWindowConfig): void {
    if (!windowConfig) {
      return;
    }
    if (windowConfig.baseurl) {
      this.basePath = windowConfig.baseurl;
    }
    if (windowConfig.nermBaseurl) {
      this.nermBasePath = windowConfig.nermBaseurl;
    }
  }

  private getHomeParams(): ConfigurationParameters {
    const config: ConfigurationParameters = {};
    try {
      const fs = loadNodeModule("fs");
      const os = loadNodeModule("os");
      const path = loadNodeModule("path");
      const yaml = loadNodeModule("js-yaml");
      const homeDir = os.homedir();
      const configPath = path.join(homeDir, ".sailpoint", "config.yaml");
      const doc = yaml.load(
        fs.readFileSync(configPath, "utf8")
      ) as Configuration;
      if (doc.authtype && doc.authtype.toLowerCase() === "pat") {
        config.baseurl = doc.environments[doc.activeenvironment].baseurl;
        config.nermBaseurl = doc.environments[doc.activeenvironment].nermBaseurl;
        config.clientId = doc.environments[doc.activeenvironment].pat.clientid;
        config.clientSecret =
          doc.environments[doc.activeenvironment].pat.clientsecret;
        config.tokenUrl = config.baseurl + "/oauth/token";
      }
    } catch (error) {
      console.log("unable to find config file in home directory");
    }
    return config;
  }

  private getLocalParams(): ConfigurationParameters {
    const config: ConfigurationParameters = {};
    try {
      const fs = loadNodeModule("fs");
      const configPath = "./config.json";
      const jsonString = fs.readFileSync(configPath, "utf-8");
      const jsonData = JSON.parse(jsonString);
      config.baseurl = jsonData.BaseURL;
      config.clientId = jsonData.ClientId;
      config.clientSecret = jsonData.ClientSecret;
      config.tokenUrl = config.baseurl + "/oauth/token";
      config.nermBaseurl = jsonData.NermBaseUrl ?? jsonData.NERMBaseURL;
    } catch (error) {
      console.log("unable to find config file in local directory");
    }
    return config;
  }

  private getEnvParams(): ConfigurationParameters {
    const config: ConfigurationParameters = {};
    config.baseurl = process.env["SAIL_BASE_URL"]
      ? process.env["SAIL_BASE_URL"]
      : "";
    config.clientId = process.env["SAIL_CLIENT_ID"]
      ? process.env["SAIL_CLIENT_ID"]
      : "";
    config.clientSecret = process.env["SAIL_CLIENT_SECRET"]
      ? process.env["SAIL_CLIENT_SECRET"]
      : "";

    config.nermBaseurl = process.env["SAIL_NERM_BASE_URL"]
      ? process.env["SAIL_NERM_BASE_URL"]
      : "";

    config.tokenUrl = config.baseurl + "/oauth/token";

    return config;
  }

  private getParams(): ConfigurationParameters {
    // Environment variables and config files are Node-only. In a browser the
    // caller either passes parameters or exposes window.sailpointConfig().
    if (!isNodeRuntime()) {
      return {};
    }
    const envConfig = this.getEnvParams();
    if (envConfig.baseurl) {
      return envConfig;
    }
    const localConfig = this.getLocalParams();
    if (localConfig.baseurl) {
      return localConfig;
    }
    const homeConfig = this.getHomeParams();
    if (homeConfig.baseurl) {
      console.log(
        "Configuration file found in home directory, this approach of loading configuration will be deprecated in future releases, please upgrade the CLI and use the new 'sail sdk init config' command to create a local configuration file"
      );
      return homeConfig;
    }
    return {};
  }

  private async getAccessToken(url: string, formData: any): Promise<string> {
    try {
      const proxyAgentModule = loadNodeModule("proxy-agent");
      const agent = proxyAgentModule
        ? new proxyAgentModule.ProxyAgent()
        : undefined;
      const { data, status } = await axios.post(url, formData, {
        httpsAgent: agent,
      });
      if (status === 200) {
        return data.access_token;
      } else {
        throw new Error("Unauthorized");
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
    const jsonMime: RegExp = new RegExp(
      "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
      "i"
    );
    return (
      mime !== null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === "application/json-patch+json")
    );
  }
}
