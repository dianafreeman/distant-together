import express from "express";
import { saveJsonAsFile, isMoreThan24HoursAgo, getGoogleSheet } from "./utils";
import { CACHE } from "../constants";

const router = express.Router();

/* GET resources */
router.get("/", async function (req, res, next) {
  let json;
  if (!isMoreThan24HoursAgo(CACHE.timestamp)) {
    console.log("------- USING CACHE -------");
    json = CACHE;
  } else {
    json = await getGoogleSheet();
    const successMessage = "GSheet Data Refreshed!";
    saveJsonAsFile({ json, successMessage });
  }
  res.json({ response: json });
});

export default router;
