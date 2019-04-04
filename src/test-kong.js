import KongClient from './index.js'

const kongClient = new KongClient({
  baseURL: 'http://kong-admin.staging.sendit.asia'
})

// kongClient
//   .retrieveConsumer('gun')
//   .then(res => console.log(res.data))

kongClient.createConsumer('test-kong-client').then(res => console.log(res))

kongClient
  .createOauthCredential(
    'test-kong-client',
    'test-oauth-credential',
    ['http://localhost:3000/test']
  )
  .catch(err => console.log(err))
  .then(res => console.log(res))
