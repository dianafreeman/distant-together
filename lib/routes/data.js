"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _utils = require("./utils");

var json = require('../data/cached');

var areaSet = (0, _utils.createUniqueSet)(json.resources, 'Area');

var router = _express.default.Router();
/* GET areas. */


router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var _json, _areaSet, audienceSet;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              _json = require('../data/cached');
              _areaSet = (0, _utils.createUniqueSet)(_json.resources, 'Area');
              audienceSet = (0, _utils.createUniqueSet)(_json.resources, 'Resources For');
              res.json({
                areas: _areaSet,
                audiences: audienceSet
              });
            } catch (err) {
              res.status(500);
              res.json({
                error: err.message
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;