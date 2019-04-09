"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshAccessToken = exports.getAccessToken = exports.createOauthCredential = exports.deleteConsumer = exports.createConsumer = exports.retrieveConsumer = exports.getKongInfomation = void 0;

var _axios = _interopRequireDefault(require("axios"));

_axios["default"].defaults.headers['Content-Type'] = 'application/json';

var getKongInfomation = function getKongInfomation(adminURL) {
  return (0, _axios["default"])({
    method: 'get',
    baseURL: adminURL
  });
};

exports.getKongInfomation = getKongInfomation;

var retrieveConsumer = function retrieveConsumer(adminURL, consumer) {
  return (0, _axios["default"])({
    method: 'get',
    baseURL: adminURL,
    url: "/consumers/".concat(consumer.name)
  });
};

exports.retrieveConsumer = retrieveConsumer;

var createConsumer = function createConsumer(adminURL, consumer) {
  return (0, _axios["default"])({
    method: 'post',
    baseURL: adminURL,
    url: '/consumers',
    data: {
      username: consumer.name
    }
  });
};

exports.createConsumer = createConsumer;

var deleteConsumer = function deleteConsumer(adminURL, consumer) {
  return (0, _axios["default"])({
    method: 'delete',
    baseURL: adminURL,
    url: "/consumers/".concat(consumer.name)
  });
};

exports.deleteConsumer = deleteConsumer;

var createOauthCredential = function createOauthCredential(adminURL, params) {
  return (0, _axios["default"])({
    method: 'post',
    baseURL: adminURL,
    url: "/consumers/".concat(params.consumerName, "/oauth2"),
    data: {
      name: params.credentialName,
      redirect_uris: params.redirectURIs
    }
  });
};

exports.createOauthCredential = createOauthCredential;

var getAccessToken = function getAccessToken(baseURL, params, provisionKey) {
  var scope = params.scope.join(' ');
  var data = {
    grant_type: params.grantType,
    scope: scope,
    authenticated_userid: params.authenticatedUserId,
    provision_key: provisionKey
  };

  switch (params.grantType) {
    case 'password':
      {
        ;
        data.username = params.username, data.password = params.password;
        break;
      }

    case 'client_credentials':
      {
        data.response_type = 'application/json';
      }
  }

  return (0, _axios["default"])({
    method: 'post',
    baseURL: baseURL,
    url: '/user/oauth2/token',
    auth: {
      username: params.clientId,
      password: params.clientSecret
    },
    data: data
  });
};

exports.getAccessToken = getAccessToken;

var refreshAccessToken = function refreshAccessToken(baseURL, params) {
  return (0, _axios["default"])({
    method: 'post',
    baseURL: baseURL,
    url: '/user/oauth2/token',
    auth: {
      username: params.clientId,
      password: params.clientSecret
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token: params.refreshToken
    }
  });
};

exports.refreshAccessToken = refreshAccessToken;
//# sourceMappingURL=connector.js.map