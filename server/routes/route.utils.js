import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const TODAY = new Date().getTime();
const ONE_DAY_AGO = TODAY - 24 * 1000 * 60 * 60;
const SHEET_RANGE = `Clinical!1:198`;

export const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SPREADSHEET_ID}/values/${SHEET_RANGE}?key=${process.env.GOOGLE_SHEET_API_KEY}`;

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
  fs.writeFile(
    path.resolve(`${targetPath}/cached.json`),
    JSON.stringify(json),
    (err) => {
      if (err) throw err;
      onSuccess();
    }
  );
};

export const isMoreThan24HoursAgo = (timestamp) => {
  try {
    return timestamp < ONE_DAY_AGO;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const arrayToObject = (arr) => {
  const header = arr.shift(); // assumes header row
  let formatted = [],
    cols = header;

  for (let i = 0; i < arr.length; i++) {
    let d = arr[i],
      o = {};
    for (let j = 0; j < header.length; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
};

export const getGoogleSheet = async () => {
  const resp = await axios.get(SHEET_URL);
  const json = {
    timestamp: new Date().getTime(),
    resources: arrayToObject(resp.data.values),
  };
  // console.log(json);
  return json;
};
