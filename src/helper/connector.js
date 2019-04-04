import HTTPClient from 'axios'

HTTPClient.defaults.headers['Content-Type'] = 'application/json'

export const getKongInfomation = baseURL =>
  HTTPClient({
    method: 'get',
    baseURL
  })

export const retrieveConsumer = (baseURL, consumerId) =>
  HTTPClient({
    method: 'get',
    baseURL,
    url: `/consumers/${consumerId}`
  })

export const createConsumer = (baseURL, consumerId) =>
  HTTPClient({
    method: 'post',
    baseURL,
    url: '/consumers',
    data: {
      username: consumerId
    }
  })

export const createOauthCredential = (
  baseURL,
  consumerId,
  name,
  redirect_uris
) =>
  HTTPClient({
    method: 'post',
    baseURL,
    url: `/consumers/${consumerId}/oauth2`,
    data: {
      name,
      redirect_uris
    }
  })
