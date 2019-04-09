import KongClient from './index.js'

const kongClient = new KongClient({
  adminURL: 'http://kong-admin.staging.sendit.asia',
  baseURL: 'https://kong-api.staging.sendit.asia/',
  provisionKey: 'fbXtBWhiHBCM4yzLVCPBgPcl2d14SQFC'
})

// kongClient
//   .retrieveConsumer({ name: 'test-kong-client' })
//   .then(res => console.log(res.data))
// const test = async () => {
//   const res = await kongClient.createConsumer({ name: 'test-kong-hello' })
//   console.log(res)
// }

// test()

// kongClient
//   .deleteConsumer({ name: 'test-kong-hello' })
//   .then(res => console.log(res))

// kongClient
//   .createOauthCredential({
//     consumerName: 'test-kong-client',
//     credentialName: 'test-v2',
//     redirectURIs: ['http://localhost:3000/test']
//   })
//   .catch(err => console.log(err))
//   .then(res => console.log(res))

// kongClient
//   .getAccessToken({
//     grantType: 'password',
//     scope: ['USER_ACCESS', 'TMS_ACCESS'],
//     authenticatedUserId: 'test-kong-client',
//     clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
//     clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL',
//     username: 'hello',
//     password: 'hello'
//   })
//   .then(res => console.log(res.data))

// kongClient
//   .refreshAccessToken({
//     refreshToken: 'pGsp8brVpICl6QT56AWrVy95djL6QzED',
//     clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
//     clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL'
//   })
//   .then(res => console.log(res))
