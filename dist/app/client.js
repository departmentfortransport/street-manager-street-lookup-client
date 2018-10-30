"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class StreetManagerStreetLookupClient {
    constructor(config) {
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get('/status'));
        });
    }
    getStreet(requestId, easting, northing) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = this.generateRequestConfig(requestId, { easting: easting, northing: northing });
            return this.httpHandler(() => this.axios.get('/nsg/street', config));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield request();
                if (response.data) {
                    return response.data;
                }
            }
            catch (err) {
                if (err && err.response && err.response.status) {
                    err.status = err.response.status;
                }
                return Promise.reject(err);
            }
        });
    }
    generateRequestConfig(requestId, params) {
        let headers = {};
        headers['x-request-id'] = requestId;
        return { headers: headers, params: params };
    }
}
exports.StreetManagerStreetLookupClient = StreetManagerStreetLookupClient;
