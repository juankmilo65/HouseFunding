const express = require("express");
const router = express.Router();

var Pdf = require("../utilities/readPdf");

router.post("/", async (req, res) => {
  console.log(req);
  const { object64 } = req.body;
  const readPdf = new Pdf("./example.pdf", object64);
  readPdf.OpenPdf();
  res.json("File Recived");
});

module.exports = router;
