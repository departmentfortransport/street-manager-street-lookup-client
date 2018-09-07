import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { StreetResponse } from '../interfaces/streetResponse'

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

  public async getStreet(requestId: string, easting: number, northing: number) {
    let config: AxiosRequestConfig = this.generateRequestConfig(requestId, { easting: easting, northing: northing })
    return this.httpHandler<StreetResponse>(() => this.axios.get('/nsg/street', config))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      if (err && err.response && err.response.status) {
        err.status = err.response.status
      }
      return Promise.reject(err)
    }
  }

  private generateRequestConfig(requestId, params): AxiosRequestConfig {
    let headers = {}
    headers['x-request-id'] = requestId
    return { headers: headers, params: params }
  }
}
