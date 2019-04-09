"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index.js"));

var kongClient = new _index["default"]({
  adminURL: 'http://kong-admin.staging.sendit.asia',
  baseURL: 'https://kong-api.staging.sendit.asia/',
  provisionKey: 'fbXtBWhiHBCM4yzLVCPBgPcl2d14SQFC'
}); // kongClient
//   .retrieveConsumer('gun')
//   .then(res => console.log(res.data))
// const test = async () => {
//   const res = await kongClient.createConsumer('test-kong')
//   console.log(res)
// }
// test()
// kongClient.deleteConsumer('gun').then(res => console.log(res))
// kongClient
//   .createOauthCredential(
//     'test-kong-client',
//     'test-oauth-credential',
//     ['http://localhost:3000/test']
//   )
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

kongClient.refreshAccessToken({
  refreshToken: 'pGsp8brVpICl6QT56AWrVy95djL6QzED',
  clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
  clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL'
}).then(function (res) {
  return console.log(res);
});
//# sourceMappingURL=test-kong.js.map