import express from "express";
import { createUniqueSet } from "./utils";

const router = express.Router();

/* GET areas. */

router.get("/", async function (req, res, next) {
  const json = require("../data/cached");
  let areaSet = createUniqueSet(json.resources, "Area");

  res.json({ areas: areaSet });
});

export default router;
