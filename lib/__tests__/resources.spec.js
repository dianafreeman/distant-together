"use strict";

var _chai = require("chai");

var _utils = require("../routes/utils");

describe("Resource Utilities", function () {
  describe("isMoreThan24HoursAgo", function () {
    it("should be false if timestamp is current", function () {
      var current = new Date().getTime();
      (0, _chai.expect)((0, _utils.isMoreThan24HoursAgo)(current)).to.equal(false);
    });
    it("should be false if 23 hours ago", function () {
      var notQuite24 = new Date().getTime() - 23 * 1000 * 60 * 60;
      (0, _chai.expect)((0, _utils.isMoreThan24HoursAgo)(notQuite24)).to.equal(false);
    });
    it("should be true if 25 hours ago", function () {
      var justOver24 = new Date().getTime() - 25 * 1000 * 60 * 60;
      (0, _chai.expect)((0, _utils.isMoreThan24HoursAgo)(justOver24)).to.equal(true);
    });
  });
  describe("arrayToObject", function () {
    it("should be tested...", function () {});
  });
});