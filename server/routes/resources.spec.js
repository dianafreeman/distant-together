import chai, { expect, spy } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import {
  SHEET_URL,
  saveJsonAsFile,
  CACHE_PATTERN,
  cachedExists,
} from "./resources.utils";

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
  describe("saveJsonAsFile", () => {
    let json = {
      data: [],
    };
    saveJsonAsFile({ json });
    // expect(MOCKS.fs.writeFile).to.have.been.called;
    // sinon.assert.called(MOCKS.fs.writeFile);
  });
});
