"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _utils = require("./utils");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var router = _express.default.Router();
/* GET resources */


router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var json, sheetResp, resources, successMessage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if ((0, _utils.isMoreThan24HoursAgo)(_constants.CACHE.timestamp)) {
              _context.next = 5;
              break;
            }

            console.log('------- USING CACHE -------');
            json = _constants.CACHE;
            _context.next = 18;
            break;

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return (0, _utils.getGoogleSheet)();

          case 8:
            sheetResp = _context.sent;
            resources = sheetResp.resources.filter(function (r) {
              return r.Title && r.Title.length > 0 && r['Source (Organization)'] && r['Source (Organization)'].length > 0 && r.Link && r.Link.length > 0;
            });
            successMessage = 'GSheet Data Refreshed!';
            json = _objectSpread({}, sheetResp, {
              resources: resources
            });
            (0, _utils.saveJsonAsFile)({
              json: json,
              successMessage: successMessage
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);
            console.error(_context.t0);

          case 18:
            res.json({
              response: json
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;