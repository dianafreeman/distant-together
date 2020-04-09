"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CACHE = exports.CACHE_PATTERN = exports.SHEET_URL = exports.SHEET_RANGE = exports.ONE_DAY_AGO = exports.TODAY = void 0;

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

var TODAY = new Date().getTime();
exports.TODAY = TODAY;
var ONE_DAY_AGO = TODAY - 24 * 1000 * 60 * 60;
exports.ONE_DAY_AGO = ONE_DAY_AGO;
var SHEET_RANGE = "Clinical!1:198";
exports.SHEET_RANGE = SHEET_RANGE;
var SHEET_URL = "https://sheets.googleapis.com/v4/spreadsheets/".concat(process.env.GOOGLE_SHEET_ID, "/values/").concat(SHEET_RANGE, "?key=").concat(process.env.GOOGLE_SHEET_API_KEY);
exports.SHEET_URL = SHEET_URL;

var CACHE_PATTERN = _path.default.resolve(__dirname, '../data/cached.json');

exports.CACHE_PATTERN = CACHE_PATTERN;

var CACHE = require('../data/cached.json');

exports.CACHE = CACHE;