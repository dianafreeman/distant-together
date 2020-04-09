import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import axios from "axios";
import { SHEET_URL, ONE_DAY_AGO } from "../constants";

dotenv.config();

export const saveJsonAsFile = async ({
  json,
  targetPath = "server/data",
  successMessage,
}) => {
  if (!json) throw new Error("cannot write Empty JSON");
  fs.writeFile(
    path.resolve(`${targetPath}/cached.json`),
    JSON.stringify(json),
    (err) => {
      if (err) throw err;
      console.log(successMessage || "Success!");
    }
  );
};

export const isMoreThan24HoursAgo = (timestamp) => {
  try {
    return new Date(timestamp) < new Date(ONE_DAY_AGO);
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
  return json;
};

export const createUniqueSet = (data, key) => {
  let unique = data
    .filter((d) => d[key] && d[key].length > 0)
    .map((d) => (d[key].includes(",") ? d[key].split(",")[0] : d[key]));

  return [...new Set(unique)];
};
