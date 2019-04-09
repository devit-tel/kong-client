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
// kongClient.createConsumer('test-kong-client').then(res => console.log(res))
// kongClient
//   .createOauthCredential(
//     'test-kong-client',
//     'test-oauth-credential',
//     ['http://localhost:3000/test']
//   )
//   .catch(err => console.log(err))
//   .then(res => console.log(res))

kongClient.getAccessToken({
  grantType: 'client_credentials',
  scope: ['USER_ACCESS', 'TMS_ACCESS'],
  authenticatedUserId: 'test-kong-client',
  clientId: 'ITLpahMKNzax87v2i6ioSwS5AikTbgxj',
  clientSecret: 'rl11Qb7nch7lgSb9XL8ZvRU5lEqSOxWL'
}).then(function (res) {
  return console.log(res.data);
});
//# sourceMappingURL=test-kong.js.map