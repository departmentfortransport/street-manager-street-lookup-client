import * as qs from 'qs'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { StreetResponse } from '../interfaces/streetResponse'
import { RequestConfig } from '../interfaces/requestConfig'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'

export interface StreetManagerStreetLookupClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerStreetLookupClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerStreetLookupClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public async status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public async getStreets(config: RequestConfig, easting: number, northing: number) {
    let axiosConfig: AxiosRequestConfig = this.generateRequestConfig(config, { easting: easting, northing: northing })
    return this.httpHandler<StreetResponse[]>(() => this.axios.get('/nsg/streets', axiosConfig))
  }

  public async getStreetsByUsrn(config: RequestConfig, usrn: number): Promise<StreetResponse> {
    return this.httpHandler<StreetResponse>(() => this.axios.get(`/nsg/streets/${usrn}`, this.generateRequestConfig(config)))
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
