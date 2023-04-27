import express from "express";
// import multer from "multer";
// import { Parser } from "xml2js";

const router = express.Router();

let response = [];

// configure the multer middleware to handle the file upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// use xml2js to parse the XML data in the request body
// const parser = new Parser();

// handle the POST request to /test
router.post("/", async (req, res, next) => {
  // console.log("Raw XML: " + req.rawBody);
  // console.log("Parsed XML: " + JSON.stringify(req.body));

  response = req.rawBody

  res.json(response);
});

router.get("/", async (req, res) => {
  try {
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as testRouter };
