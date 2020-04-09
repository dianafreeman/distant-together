"use strict";

var _chai = require("chai");

var _constants = require("../constants");

describe("Constants", function () {
  describe("SHEET_URL", function () {
    it('should not contain the word "undefined"', function () {
      (0, _chai.expect)(_constants.SHEET_URL).not.to.contain("undefined");
    });
  });
  describe("CACHE_PATTERN", function () {
    it("should not be undefined", function () {
      (0, _chai.expect)(_constants.CACHE_PATTERN).not.to.be.undefined;
    });
  });
  describe("SHEET_RANGE", function () {
    it("should not be undefined", function () {
      (0, _chai.expect)(_constants.SHEET_RANGE).not.to.be.undefined;
    });
  });
});