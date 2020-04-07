import express from "express";

const router = express.Router();

/* GET areas. */

router.get("/", async function (req, res, next) {
  const json = require("../data/cached");
  let allAreas = json.resources
    .filter((r) => r.Area.length > 0)
    .map((r) => (r.Area.includes(",") ? r.Area.split(",")[0] : r.Area));

  let set = [...new Set(allAreas)];

  res.json({ response: set });
});

export default router;
