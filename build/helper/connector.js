"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOauthCredential = exports.createConsumer = exports.retrieveConsumer = exports.getKongInfomation = void 0;

var _axios = _interopRequireDefault(require("axios"));

_axios["default"].defaults.headers['Content-Type'] = 'application/json';

var getKongInfomation = function getKongInfomation(baseURL) {
  return (0, _axios["default"])({
    method: 'get',
    baseURL: baseURL
  });
};

exports.getKongInfomation = getKongInfomation;

var retrieveConsumer = function retrieveConsumer(baseURL, consumerId) {
  return (0, _axios["default"])({
    method: 'get',
    baseURL: baseURL,
    url: "/consumers/".concat(consumerId)
  });
};

exports.retrieveConsumer = retrieveConsumer;

var createConsumer = function createConsumer(baseURL, consumerId) {
  return (0, _axios["default"])({
    method: 'post',
    baseURL: baseURL,
    url: '/consumers',
    data: {
      username: consumerId
    }
  });
};

exports.createConsumer = createConsumer;

var createOauthCredential = function createOauthCredential(baseURL, consumerId, name, redirect_uris) {
  return (0, _axios["default"])({
    method: 'post',
    baseURL: baseURL,
    url: "/consumers/".concat(consumerId, "/oauth2"),
    data: {
      name: name,
      redirect_uris: redirect_uris
    }
  });
};

exports.createOauthCredential = createOauthCredential;
//# sourceMappingURL=connector.js.map