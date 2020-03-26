import * as qs from 'qs'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { StreetResponse } from '../interfaces/streetResponse'
import { RequestConfig } from '../interfaces/requestConfig'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { StreetSummaryResponse } from '../interfaces/streetSummaryResponse'
import { Agent } from 'https'

export interface StreetManagerStreetLookupClientConfig {
  baseURL: string,
  timeout?: number,
  disableCertificateVerification?: boolean
}

export class StreetManagerStreetLookupClient {
  private axios: AxiosInstance

  constructor(private config: StreetManagerStreetLookupClientConfig) {
    let axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    }

    if (this.config.disableCertificateVerification) {
      axiosRequestConfig.httpsAgent = new Agent({
        rejectUnauthorized: false
      })
    }

    this.axios = axios.create(axiosRequestConfig)
  }

  public async status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public async getStreets(config: RequestConfig, easting: number, northing: number): Promise<StreetResponse[]> {
    return this.httpHandler<StreetResponse[]>(() => this.axios.get('/nsg/streets', this.generateRequestConfig(config, { easting: easting, northing: northing })))
  }

  public async getStreetsByUsrn(config: RequestConfig, usrn: number): Promise<StreetResponse> {
    return this.httpHandler<StreetResponse>(() => this.axios.get(`/nsg/streets/${usrn}`, this.generateRequestConfig(config)))
  }

  public async getStreetsByQuery(config: RequestConfig, query: string): Promise<StreetSummaryResponse[]> {
    let axiosConfig: AxiosRequestConfig = this.generateRequestConfig(config, { query: query })
    return this.httpHandler<StreetSummaryResponse[]>(() => this.axios.get(`/nsg/search`, axiosConfig))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private handleError(err) {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
    return Promise.reject(err)
  }

  private generateRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    let requestConfig: AxiosRequestConfig = {
      headers: {
        token: config.token,
        'x-request-id': config.requestId
      }
    }

    if (config.frontendToken) {
      requestConfig.headers.frontendToken = config.frontendToken
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
      requestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    return requestConfig
  }
}
