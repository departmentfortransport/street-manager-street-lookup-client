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
const qs = require("qs");
const axios_1 = require("axios");
const http_status_codes_1 = require("http-status-codes");
const HttpProxyAgent = require("http-proxy-agent");
class StreetManagerStreetLookupClient {
    constructor(config) {
        this.config = config;
        const agent = new HttpProxyAgent(this.config.baseURL);
        this.axios = axios_1.default.create({
            httpAgent: agent
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get('/status'));
        });
    }
    getStreets(config, easting, northing) {
        return __awaiter(this, void 0, void 0, function* () {
            let axiosConfig = this.generateRequestConfig(config, { easting: easting, northing: northing });
            return this.httpHandler(() => this.axios.get('/nsg/streets', axiosConfig));
        });
    }
    getStreetsByUsrn(config, usrn) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/nsg/streets/${usrn}`, this.generateRequestConfig(config)));
        });
    }
    getStreetsByQuery(config, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let axiosConfig = this.generateRequestConfig(config, { query: query });
            return this.httpHandler(() => this.axios.get(`/nsg/search`, axiosConfig));
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
                return this.handleError(err);
            }
        });
    }
    handleError(err) {
        err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        return Promise.reject(err);
    }
    generateRequestConfig(config, request) {
        let requestConfig = {
            headers: {
                token: config.token,
                'x-request-id': config.requestId
            }
        };
        if (config.frontendToken) {
            requestConfig.headers.frontendToken = config.frontendToken;
        }
        if (!request) {
            requestConfig.params = {};
        }
        else {
            requestConfig.params = request;
            requestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        return requestConfig;
    }
}
exports.StreetManagerStreetLookupClient = StreetManagerStreetLookupClient;
