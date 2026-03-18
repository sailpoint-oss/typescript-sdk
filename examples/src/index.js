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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
// Generator Examples - Memory efficient pagination
var getPaginatedAccountsWithGenerator = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, processedCount, _a, _b, _c, account, e_1_1;
    var _d, e_1, _e, _f;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                console.log("\n=== Using Generator for Accounts ===");
                apiConfig = new sailpoint_api_client_1.Configuration();
                api = new sailpoint_api_client_1.AccountsApi(apiConfig);
                processedCount = 0;
                _h.label = 1;
            case 1:
                _h.trys.push([1, 6, 7, 12]);
                _a = true, _b = __asyncValues(sailpoint_api_client_1.Paginator.paginateGenerator(api, api.listAccounts, { limit: 100, sorters: "created" }, // Total limit of 100
                20 // Page size of 20
                ));
                _h.label = 2;
            case 2: return [4 /*yield*/, _b.next()];
            case 3:
                if (!(_c = _h.sent(), _d = _c.done, !_d)) return [3 /*break*/, 5];
                _f = _c.value;
                _a = false;
                account = _f;
                processedCount++;
                console.log("Account ".concat(processedCount, ": ").concat(account.name, " (").concat(account.id, ")"));
                // Example: Stop early if we find what we're looking for
                if ((_g = account.name) === null || _g === void 0 ? void 0 : _g.includes("admin")) {
                    console.log("Found admin account, stopping early");
                    return [3 /*break*/, 5];
                }
                _h.label = 4;
            case 4:
                _a = true;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _h.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _h.trys.push([7, , 10, 11]);
                if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 9];
                return [4 /*yield*/, _e.call(_b)];
            case 8:
                _h.sent();
                _h.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12:
                console.log("Total accounts processed: ".concat(processedCount));
                return [2 /*return*/];
        }
    });
}); };
var searchWithGenerator = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, search, count, startTime, _a, _b, _c, doc, identity, e_2_1, elapsed;
    var _d, e_2, _e, _f;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                console.log("\n=== Using Generator for Search ===");
                apiConfig = new sailpoint_api_client_1.Configuration();
                api = new sailpoint_api_client_1.SearchApi(apiConfig);
                search = {
                    indices: ["identities"],
                    query: { query: "*" },
                    sort: ["name"] // Required for search pagination
                };
                count = 0;
                startTime = Date.now();
                _h.label = 1;
            case 1:
                _h.trys.push([1, 6, 7, 12]);
                _a = true, _b = __asyncValues(sailpoint_api_client_1.Paginator.paginateSearchApiGenerator(api, search, 50, 200));
                _h.label = 2;
            case 2: return [4 /*yield*/, _b.next()];
            case 3:
                if (!(_c = _h.sent(), _d = _c.done, !_d)) return [3 /*break*/, 5];
                _f = _c.value;
                _a = false;
                doc = _f;
                identity = doc;
                count++;
                // Process each identity immediately
                if (count <= 5) {
                    console.log("Identity ".concat(count, ": ").concat(identity.name));
                }
                // Example use case: Find specific identities without loading all
                if (((_g = identity.attributes) === null || _g === void 0 ? void 0 : _g.department) === "Engineering") {
                    console.log("Found Engineering member: ".concat(identity.name));
                }
                _h.label = 4;
            case 4:
                _a = true;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_2_1 = _h.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 12];
            case 7:
                _h.trys.push([7, , 10, 11]);
                if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 9];
                return [4 /*yield*/, _e.call(_b)];
            case 8:
                _h.sent();
                _h.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12:
                elapsed = Date.now() - startTime;
                console.log("\nProcessed ".concat(count, " identities in ").concat(elapsed, "ms"));
                console.log("Started processing immediately, didn't wait for all data!");
                return [2 /*return*/];
        }
    });
}); };
var compareGeneratorVsRegularPagination = function () { return __awaiter(void 0, void 0, void 0, function () {
    var apiConfig, api, regularStart, allGroups, regularTime, generatorStart, genCount, firstItemTime, _a, _b, _c, group, e_3_1, generatorTime;
    var _d, e_3, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                console.log("\n=== Comparing Generator vs Regular Pagination ===");
                apiConfig = new sailpoint_api_client_1.Configuration();
                api = new sailpoint_api_client_1.GovernanceGroupsBetaApi(apiConfig);
                // Regular pagination - waits for all data
                console.log("\n1. Regular Pagination (waits for all data):");
                regularStart = Date.now();
                return [4 /*yield*/, sailpoint_api_client_1.Paginator.paginate(api, api.listWorkgroups, { limit: 50 }, 10)];
            case 1:
                allGroups = _g.sent();
                regularTime = Date.now() - regularStart;
                console.log("   Fetched all ".concat(allGroups.data.length, " groups in ").concat(regularTime, "ms"));
                console.log("   Now processing them...");
                allGroups.data.forEach(function (group, i) {
                    if (i < 3)
                        console.log("   - ".concat(group.name));
                });
                // Generator pagination - processes as data arrives
                console.log("\n2. Generator Pagination (processes immediately):");
                generatorStart = Date.now();
                genCount = 0;
                firstItemTime = 0;
                _g.label = 2;
            case 2:
                _g.trys.push([2, 7, 8, 13]);
                _a = true, _b = __asyncValues(sailpoint_api_client_1.Paginator.paginateGenerator(api, api.listWorkgroups, { limit: 50 }, 10));
                _g.label = 3;
            case 3: return [4 /*yield*/, _b.next()];
            case 4:
                if (!(_c = _g.sent(), _d = _c.done, !_d)) return [3 /*break*/, 6];
                _f = _c.value;
                _a = false;
                group = _f;
                genCount++;
                if (genCount === 1) {
                    firstItemTime = Date.now() - generatorStart;
                    console.log("   First item available after ".concat(firstItemTime, "ms!"));
                }
                if (genCount <= 3) {
                    console.log("   - ".concat(group.name));
                }
                _g.label = 5;
            case 5:
                _a = true;
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 13];
            case 7:
                e_3_1 = _g.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 13];
            case 8:
                _g.trys.push([8, , 11, 12]);
                if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 10];
                return [4 /*yield*/, _e.call(_b)];
            case 9:
                _g.sent();
                _g.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                if (e_3) throw e_3.error;
                return [7 /*endfinally*/];
            case 12: return [7 /*endfinally*/];
            case 13:
                generatorTime = Date.now() - generatorStart;
                console.log("   Processed ".concat(genCount, " groups in ").concat(generatorTime, "ms"));
                console.log("   Started processing ".concat(regularTime - firstItemTime, "ms earlier than regular pagination!"));
                return [2 /*return*/];
        }
    });
}); };
// Run examples
// listEntitlements()
// getPaginatedAccountsWithGenerator()
// searchWithGenerator()
compareGeneratorVsRegularPagination();
