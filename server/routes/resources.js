import express from "express";
import axios from "axios";
import { writeFile } from "fs";
import { SHEET_URL } from "./resources.utils";

const router = express.Router();

/* GET resources listing. */

router.get("/", async function (req, res, next) {
  try {
    const resp = await axios.get(SHEET_URL);
    res.json({ resources: resp.data.values });
  } catch (err) {
    res.status(500);
    res.json({ error: err.message });
  }
});

export default router;
