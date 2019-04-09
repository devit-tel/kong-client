import {
  getKongInfomation,
  retrieveConsumer,
  createConsumer,
  createOauthCredential,
  getAccessToken
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

  retrieveConsumer = consumerId =>
    retrieveConsumer(this.options.adminURL, consumerId)

  createConsumer = consumerId =>
    createConsumer(this.options.adminURL, consumerId)

  createOauthCredential = (consumerId, name, redirectUris) =>
    createOauthCredential(this.options.adminURL, consumerId, name, redirectUris)

  getAccessToken = params =>
    getAccessToken(this.options.baseURL, params, this.options.provisionKey)
}
