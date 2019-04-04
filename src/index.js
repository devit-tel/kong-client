import {
  getKongInfomation,
  retrieveConsumer,
  createConsumer,
  createOauthCredential
} from './helper/connector'

export const DEFAULT_OPTIONS = {
  baseURL: 'http://localhost:8001'
}

export default class KongClient {
  constructor(options) {
    this.options = { ...DEFAULT_OPTIONS, ...options }
    this.tasks = {}
  }

  getKongInfomation = () => getKongInfomation(this.options.baseURL)

  retrieveConsumer = consumerId =>
    retrieveConsumer(this.options.baseURL, consumerId)

  createConsumer = consumerId =>
    createConsumer(this.options.baseURL, consumerId)

  createOauthCredential = (consumerId, name, redirectUris) =>
    createOauthCredential(this.options.baseURL, consumerId, name, redirectUris)
}
