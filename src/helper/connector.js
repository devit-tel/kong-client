import HTTPClient from 'axios'

HTTPClient.defaults.headers['Content-Type'] = 'application/json'

export const getKongInfomation = adminURL =>
  HTTPClient({
    method: 'get',
    baseURL: adminURL
  })

export const retrieveConsumer = (adminURL, consumer) =>
  HTTPClient({
    method: 'get',
    baseURL: adminURL,
    url: `/consumers/${consumer.name}`
  })

export const createConsumer = (adminURL, consumer) =>
  HTTPClient({
    method: 'post',
    baseURL: adminURL,
    url: '/consumers',
    data: {
      username: consumer.name
    }
  })

export const deleteConsumer = (adminURL, consumer) =>
  HTTPClient({
    method: 'delete',
    baseURL: adminURL,
    url: `/consumers/${consumer.name}`
  })

export const createOauthCredential = (adminURL, params) =>
  HTTPClient({
    method: 'post',
    baseURL: adminURL,
    url: `/consumers/${params.consumerName}/oauth2`,
    data: {
      name: params.credentialName,
      redirect_uris: params.redirectURIs
    }
  })

export const getAccessToken = (baseURL, params, provisionKey) => {
  const scope = params.scope.join(' ')
  let data = {
    grant_type: params.grantType,
    scope,
    authenticated_userid: params.authenticatedUserId,
    provision_key: provisionKey
  }
  switch (params.grantType) {
    case 'password': {
      ;(data.username = params.username), (data.password = params.password)
      break
    }
    case 'client_credentials': {
      data.response_type = 'application/json'
    }
  }
  return HTTPClient({
    method: 'post',
    baseURL,
    url: '/user/oauth2/token',
    auth: {
      username: params.clientId,
      password: params.clientSecret
    },
    data
  })
}

export const refreshAccessToken = (baseURL, params) =>
  HTTPClient({
    method: 'post',
    baseURL,
    url: '/user/oauth2/token',
    auth: {
      username: params.clientId,
      password: params.clientSecret
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token: params.refreshToken
    }
  })
