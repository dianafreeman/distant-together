import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const ONE_DAY_AGO = new Date().getTime() - 24 * 1000 * 60 * 60;

export const CACHE_PATTERN = path.resolve(__dirname, "../data/cached.json");

export const cachedExists = (pathToCheck = CACHE_PATTERN) => {
  try {
    let file = require(pathToCheck); // assumes JSON
    return file ? true : false;
  } catch (err) {
    return false;
  }
};

export const saveJsonAsFile = async ({
  json,
  targetPath = "server/data",
  onSuccess,
}) => {
  if (!json) throw new Error("cannot write Empty JSON");
  fs.writeFile(path.resolve(`${targetPath}/cached.json`), json, (err) => {
    if (err) throw err;
    onSuccess && onSuccess();
    console.log("JSON data from GSheet has been refreshed!");
  });
};

export const getCache = async ({ path = CACHE_PATTERN }) => {
  try {
    let file = await fs.readFileSync(path);
    return file;
  } catch (err) {
    console.error(err);
  }
};

export const jsonIsExpired = (json) => json.timetamp > ONE_DAY_AGO;

const SHEET_RANGE = `Clinical!1:198`;

export const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SPREADSHEET_ID}/values/${SHEET_RANGE}?key=${process.env.GOOGLE_SHEET_API_KEY}`;
