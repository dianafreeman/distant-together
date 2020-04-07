import express from "express";
import { createUniqueSet } from "./utils";
const router = express.Router();

/* GET tags listing. */

router.get("/", async function (req, res, next) {
  const json = require("../data/cached");
  let tagSet = createUniqueSet(json.resources, "Tags");
  res.json({ response: { tags: tagSet } });
});

export default router;
