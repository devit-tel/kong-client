"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index.js"));

var kongClient = new _index["default"]({
  adminURL: 'http://kong-admin.staging.sendit.asia',
  baseURL: 'https://kong-api.staging.sendit.asia/',
  provisionKey: 'tU17oypUwWA6zK518mNLhasXffC1jWiy'
}); // kongClient
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
//     scope: ['EXTERNAL_OMS_ACCESS'],
//     authenticatedUserId: 'True-e-logistic',
//     clientId: 's3suvte87b6BOSbF9SdlWkjv6JyUeemQ',
//     clientSecret: 'ZLrnoNjbz2v843BCQs1mvjTRZXTHyvOp',
//     username: undefined,
//     password: 'sha1$105af035$1$4518b1fbea5d9f64b56d3447a82f41dc8eda5559'
//   })
//   .then(res => console.log(res.data))
// kongClient
//   .refreshAccessToken({
//     refreshToken: 'pGsp8brVpICl6QT56AWrVy95djL6QzED',
//     clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
//     clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL'
//   })
//   .then(res => console.log(res))
//# sourceMappingURL=test-kong.js.map