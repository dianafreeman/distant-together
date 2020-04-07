import { expect } from "chai";
import { cachedExists, isMoreThan24HoursAgo } from "../routes/utils";

describe("Resource Utilities", () => {
  describe("isMoreThan24HoursAgo", () => {
    it("should be false if timestamp is current", () => {
      let current = new Date().getTime();
      expect(isMoreThan24HoursAgo(current)).to.equal(false);
    });

    it("should be false if 23 hours ago", () => {
      let notQuite24 = new Date().getTime() - 23 * 1000 * 60 * 60;
      expect(isMoreThan24HoursAgo(notQuite24)).to.equal(false);
    });

    it("should be true if 25 hours ago", () => {
      let justOver24 = new Date().getTime() - 25 * 1000 * 60 * 60;
      expect(isMoreThan24HoursAgo(justOver24)).to.equal(true);
    });
  });
  describe("arrayToObject", () => {
    it("should be tested...", () => {});
  });
});
