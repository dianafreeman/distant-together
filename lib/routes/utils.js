"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUniqueSet = exports.getGoogleSheet = exports.arrayToObject = exports.isMoreThan24HoursAgo = exports.saveJsonAsFile = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../constants");

_dotenv.default.config();

var saveJsonAsFile = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var json, _ref$targetPath, targetPath, successMessage;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            json = _ref.json, _ref$targetPath = _ref.targetPath, targetPath = _ref$targetPath === void 0 ? 'data' : _ref$targetPath, successMessage = _ref.successMessage;

            if (json) {
              _context.next = 3;
              break;
            }

            throw new Error('cannot write Empty JSON');

          case 3:
            _fs.default.writeFile(_path.default.resolve("".concat(targetPath, "/cached.json")), JSON.stringify(json), function (err) {
              if (err) throw err;
              console.log(successMessage || 'Success!');
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveJsonAsFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.saveJsonAsFile = saveJsonAsFile;

var isMoreThan24HoursAgo = function isMoreThan24HoursAgo(timestamp) {
  try {
    return new Date(timestamp) < new Date(_constants.ONE_DAY_AGO);
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.isMoreThan24HoursAgo = isMoreThan24HoursAgo;

var arrayToObject = function arrayToObject(arr) {
  var header = arr.shift(); // assumes header row

  var formatted = [],
      cols = header;

  for (var i = 0; i < arr.length; i++) {
    var d = arr[i],
        o = {};

    for (var j = 0; j < header.length; j++) {
      o[cols[j]] = d[j];
    }

    formatted.push(o);
  }

  return formatted;
};

exports.arrayToObject = arrayToObject;

var getGoogleSheet = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var resp, json;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios.default.get(_constants.SHEET_URL);

          case 2:
            resp = _context2.sent;
            json = {
              timestamp: new Date().getTime(),
              resources: arrayToObject(resp.data.values)
            };
            return _context2.abrupt("return", json);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getGoogleSheet() {
    return _ref3.apply(this, arguments);
  };
}();

exports.getGoogleSheet = getGoogleSheet;

var createUniqueSet = function createUniqueSet(data, key) {
  var unique = data.filter(function (d) {
    return d[key] && d[key].length > 0;
  }).map(function (d) {
    return d[key].includes(',') ? d[key].split(',')[0] : d[key];
  });
  return ignoreTrailingSpaces((0, _toConsumableArray2.default)(new Set(unique)));
};

exports.createUniqueSet = createUniqueSet;

var ignoreTrailingSpaces = function ignoreTrailingSpaces(array) {
  var out = [];

  for (var a in array) {
    if (out.indexOf(withoutWhitespace(array[a])) === -1) {
      out.push(withoutWhitespace(array[a]));
    }
  }

  return out;
};

var withoutWhitespace = function withoutWhitespace(val) {
  return val.trim();
};