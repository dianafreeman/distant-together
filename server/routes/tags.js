import express from "express";

const router = express.Router();

/* GET tags listing. */

router.get("/", async function (req, res, next) {
  const json = require("../data/cached");
  let allTags = json.resources
    .filter((r) => r.Tags && r.Tags.length > 0)
    .map((r) => (r.Tags.includes(",") ? r.Tags.split(",")[0] : r.Tags));

  let set = [...new Set(allTags)];

  res.json({ response: set });
});

export default router;
