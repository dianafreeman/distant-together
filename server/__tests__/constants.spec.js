import { expect } from "chai";
import { SHEET_URL, CACHE_PATTERN, SHEET_RANGE } from "../constants";

describe("Constants", () => {
  describe("SHEET_URL", () => {
    it('should not contain the word "undefined"', () => {
      expect(SHEET_URL).not.to.contain("undefined");
    });
  });
  describe("CACHE_PATTERN", () => {
    it("should not be undefined", () => {
      expect(CACHE_PATTERN).not.to.be.undefined;
    });
  });
  describe("SHEET_RANGE", () => {
    it("should not be undefined", () => {
      expect(SHEET_RANGE).not.to.be.undefined;
    });
  });
});
