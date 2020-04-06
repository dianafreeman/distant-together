import express from "express";
import axios from "axios";
import { writeFile } from "fs";

const router = express.Router();

/* GET resources listing. */
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SPREADSHEET_ID}/values/Clinical!1:198?key=${process.env.GOOGLE_SHEET_API_KEY}`;

router.get("/", async function (req, res, next) {
  const resp = await axios.get(URL);
  res.json({ resources: resp.data.values });
});

export default router;
