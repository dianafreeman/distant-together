import express from "express";
import axios from "axios";

const router = express.Router();

const arrToObject = arr => {
  //assuming header
  const header = arr.shift();
  //vacate keys from main array

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
const URL = `https://sheets.googleapis.com/v4/spreadsheets/1B5TGoyQFAvqz0ZVnaJPGPbIFPiIvv4BoVr1flLnITRg/values/Clinical!1:198?key=AIzaSyCKy9qEhymMYkaW3m-92W8WIRbk5UPlP6w`;
/* GET resources listing. */
router.get("/", async function (req, res, next) {
  const resp = await axios.get(URL);
  let obj = arrToObject(resp.data.values);
  // console.log(obj)
  res.json({ resources: obj });
});

export default router;
