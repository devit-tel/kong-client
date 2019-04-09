import KongClient from './index.js'

const kongClient = new KongClient({
  adminURL: 'http://kong-admin.staging.sendit.asia',
  baseURL: 'https://kong-api.staging.sendit.asia/',
  provisionKey: 'fbXtBWhiHBCM4yzLVCPBgPcl2d14SQFC'
})

// kongClient
//   .retrieveConsumer('gun')
//   .then(res => console.log(res.data))

// kongClient.createConsumer('test-kong-client').then(res => console.log(res))

// kongClient
//   .createOauthCredential(
//     'test-kong-client',
//     'test-oauth-credential',
//     ['http://localhost:3000/test']
//   )
//   .catch(err => console.log(err))
//   .then(res => console.log(res))

kongClient
  .getAccessToken({
    grantType: 'password',
    scope: ['USER_ACCESS', 'TMS_ACCESS'],
    authenticatedUserId: 'test-kong-client',
    username: 'hello',
    password: 'hello',
    clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
    clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL'
  })
  .then(res => console.log(res.data))
