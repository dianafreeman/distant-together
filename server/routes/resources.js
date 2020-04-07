import express from "express";
import { writeFile } from "fs";
import { saveJsonAsFile, isMoreThan24HoursAgo, getGoogleSheet } from "./utils";

const router = express.Router();

/* GET resources */

router.get("/", async function (req, res, next) {
  const cache = require("../data/cached");
  let json;
  if (!cache.timestamp || isMoreThan24HoursAgo(cache.timestamp)) {
    json = await getGoogleSheet();
    let onSuccess = () => console.log("GSheet Data Refreshed!");
    saveJsonAsFile({ json, onSuccess });
  } else {
    console.log("------- USING CACHE -------");
    json = cache;
  }
  res.json({ response: json });
});

export default router;
