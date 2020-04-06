import express from "express";
import axios from "axios";
import { writeFile } from "fs";

const router = express.Router();

const URL = `https://sheets.googleapis.com/v4/spreadsheets/1B5TGoyQFAvqz0ZVnaJPGPbIFPiIvv4BoVr1flLnITRg/values/Clinical!1:198?key=AIzaSyCKy9qEhymMYkaW3m-92W8WIRbk5UPlP6w`;
/* GET resources listing. */
router.get("/", async function (req, res, next) {
  const resp = await axios.get(URL);

  res.json({ resources: resp.data.values });
});

export default router;
