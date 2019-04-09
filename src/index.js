import {
  getKongInfomation,
  retrieveConsumer,
  createConsumer,
  deleteConsumer,
  createOauthCredential,
  getAccessToken,
  refreshAccessToken
} from './helper/connector'

export const DEFAULT_OPTIONS = {
  adminURL: 'http://localhost:8001',
  baseURL: 'http://localhost:8000',
  provisionKey: 'some-key'
}

export default class KongClient {
  constructor(options) {
    this.options = { ...DEFAULT_OPTIONS, ...options }
    this.tasks = {}
  }

  getKongInfomation = () => getKongInfomation(this.options.adminURL)

  retrieveConsumer = consumer =>
    retrieveConsumer(this.options.adminURL, consumer)

  createConsumer = consumer => createConsumer(this.options.adminURL, consumer)

  deleteConsumer = consumer => deleteConsumer(this.options.adminURL, consumer)

  createOauthCredential = params =>
    createOauthCredential(this.options.adminURL, params)

  getAccessToken = params =>
    getAccessToken(this.options.baseURL, params, this.options.provisionKey)

  refreshAccessToken = params =>
    refreshAccessToken(this.options.baseURL, params)
}
