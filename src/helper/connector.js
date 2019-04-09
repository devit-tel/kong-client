import HTTPClient from 'axios'

HTTPClient.defaults.headers['Content-Type'] = 'application/json'

export const getKongInfomation = adminURL =>
  HTTPClient({
    method: 'get',
    baseURL: adminURL
  })

export const retrieveConsumer = (adminURL, consumerId) =>
  HTTPClient({
    method: 'get',
    baseURL: adminURL,
    url: `/consumers/${consumerId}`
  })

export const createConsumer = (adminURL, consumerId) =>
  HTTPClient({
    method: 'post',
    baseURL: adminURL,
    url: '/consumers',
    data: {
      username: consumerId
    }
  })

export const deleteConsumer = (adminURL, consumerId) =>
  HTTPClient({
    method: 'delete',
    baseURL: adminURL,
    url: `/consumers/${consumerId}`
  })

export const createOauthCredential = (
  adminURL,
  consumerId,
  name,
  redirect_uris
) =>
  HTTPClient({
    method: 'post',
    baseURL: adminURL,
    url: `/consumers/${consumerId}/oauth2`,
    data: {
      name,
      redirect_uris
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
