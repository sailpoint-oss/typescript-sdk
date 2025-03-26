"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sailpoint_api_client_1 = require("sailpoint-api-client");
var createTransform = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, transform, val;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiConfig = new sailpoint_api_client_1.Configuration();
                api = new sailpoint_api_client_1.TransformsApi(apiConfig);
                transform = {
                    transform: {
                        name: "Test Transform",
                        type: "dateFormat",
                        attributes: {
                            inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",
                            outputFormat: "yyyy/dd/MM"
                        }
                    }
                };
                return [4 /*yield*/, api.createTransform(transform)];
            case 1:
                val = _a.sent();
                console.log(val.data);
                return [2 /*return*/];
        }
    });
}); };
// const search = async () => {
//     let apiConfig = new Configuration()
//     let api = new SearchApi(apiConfig)
//     let search: Search = {
//         indices: [
//             "identities"
//         ],
//         query: {
//             query: "*"
//         },
//         sort: ["-name"]
// 	}
//     const val = await Paginator.paginateSearchApi(api, search, 100, 1000)
//     for (const result of val.data) {
//         const castedResult: IdentityDocument = result
//         console.log(castedResult.name)
//     }
// }
var getPaginatedAccounts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, val;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiConfig = new sailpoint_api_client_1.Configuration();
                apiConfig.retriesConfig = {
                    retries: 4,
                    retryDelay: sailpoint_api_client_1.axiosRetry.exponentialDelay,
                    onRetry: function (retryCount, error, requestConfig) {
                        console.log("retrying due to request error, try number ".concat(retryCount));
                    },
                };
                api = new sailpoint_api_client_1.AccountsApi(apiConfig);
                return [4 /*yield*/, sailpoint_api_client_1.Paginator.paginate(api, api.listAccounts, { limit: 20, sorters: "created" }, 10)];
            case 1:
                val = _a.sent();
                console.log(val.data);
                return [2 /*return*/];
        }
    });
}); };
var getPaginatedTransforms = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, val;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiConfig = new sailpoint_api_client_1.Configuration();
                apiConfig.retriesConfig = {
                    retries: 4,
                    retryDelay: sailpoint_api_client_1.axiosRetry.exponentialDelay,
                    onRetry: function (retryCount, error, requestConfig) {
                        console.log("retrying due to request error, try number ".concat(retryCount));
                    },
                };
                api = new sailpoint_api_client_1.TransformsApi(apiConfig);
                return [4 /*yield*/, sailpoint_api_client_1.Paginator.paginate(api, api.listTransforms, { limit: 250 }, 100)];
            case 1:
                val = _a.sent();
                console.log(val.data.length);
                return [2 /*return*/];
        }
    });
}); };
var listTransforms = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, val;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiConfig = new sailpoint_api_client_1.Configuration();
                api = new sailpoint_api_client_1.TransformsBetaApi(apiConfig);
                return [4 /*yield*/, api.listTransforms()];
            case 1:
                val = _a.sent();
                console.log(val.data);
                return [2 /*return*/];
        }
    });
}); };
var listEntitlements = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, val;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiConfig = new sailpoint_api_client_1.Configuration();
                apiConfig.experimental = true;
                api = new sailpoint_api_client_1.EntitlementsV2025Api(apiConfig);
                return [4 /*yield*/, api.listEntitlements()];
            case 1:
                val = _a.sent();
                console.log(val.data);
                return [2 /*return*/];
        }
    });
}); };
listEntitlements();
