"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_OPTIONS = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _connector = require("./helper/connector");

var DEFAULT_OPTIONS = {
  adminURL: 'http://localhost:8001',
  baseURL: 'http://localhost:8000',
  provisionKey: 'some-key'
};
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;

var KongClient = function KongClient(options) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, KongClient);
  (0, _defineProperty2["default"])(this, "getKongInfomation", function () {
    return (0, _connector.getKongInfomation)(_this.options.adminURL);
  });
  (0, _defineProperty2["default"])(this, "retrieveConsumer", function (consumerId) {
    return (0, _connector.retrieveConsumer)(_this.options.adminURL, consumerId);
  });
  (0, _defineProperty2["default"])(this, "createConsumer", function (consumerId) {
    return (0, _connector.createConsumer)(_this.options.adminURL, consumerId);
  });
  (0, _defineProperty2["default"])(this, "deleteConsumer", function (consumerId) {
    return (0, _connector.deleteConsumer)(_this.options.adminURL, consumerId);
  });
  (0, _defineProperty2["default"])(this, "createOauthCredential", function (consumerId, name, redirectUris) {
    return (0, _connector.createOauthCredential)(_this.options.adminURL, consumerId, name, redirectUris);
  });
  (0, _defineProperty2["default"])(this, "getAccessToken", function (params) {
    return (0, _connector.getAccessToken)(_this.options.baseURL, params, _this.options.provisionKey);
  });
  (0, _defineProperty2["default"])(this, "refreshAccessToken", function (params) {
    return (0, _connector.refreshAccessToken)(_this.options.baseURL, params);
  });
  this.options = (0, _objectSpread2["default"])({}, DEFAULT_OPTIONS, options);
  this.tasks = {};
};

exports["default"] = KongClient;
//# sourceMappingURL=index.js.map