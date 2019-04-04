"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index.js"));

var kongClient = new _index["default"]({
  baseURL: 'http://kong-admin.staging.sendit.asia'
}); // kongClient
//   .retrieveConsumer('gun')
//   .then(res => console.log(res.data))

kongClient.createConsumer('test-kong-client').then(function (res) {
  return console.log(res);
});
kongClient.createOauthCredential('test-kong-client', 'test-oauth-credential', ['http://localhost:3000/test'])["catch"](function (err) {
  return console.log(err);
}).then(function (res) {
  return console.log(res);
});
//# sourceMappingURL=test-kong.js.map