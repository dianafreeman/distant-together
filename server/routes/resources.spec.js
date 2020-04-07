import chai, { expect, spy } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import {
  SHEET_URL,
  CACHE_PATTERN,
  cachedExists,
  isMoreThan24HoursAgo,
} from "./route.utils";

chai.use(sinonChai);

const MOCKS = {
  fs: {
    writeFile: sinon.spy(),
  },
};
describe("Resource Utilities", () => {
  describe("URL", () => {
    it('should not contain the word "undefined"', () => {
      expect(SHEET_URL).not.to.contain("undefined");
    });
  });
  describe("CACHE_PATTERN", () => {
    it("should exist", () => {
      expect(CACHE_PATTERN).to.exist;
    });
  });
  describe("cachedExists", () => {
    it("should be true with default path", () => {
      expect(cachedExists()).to.equal(true);
    });
    it("should fail with an invalid path", () => {
      expect(cachedExists("dbfuaoeshr")).to.equal(false);
    });
  });
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
