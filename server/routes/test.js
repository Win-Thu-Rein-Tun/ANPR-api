import express from "express";
import multer from "multer";
import { Parser } from "xml2js";

const router = express.Router();

// configure the multer middleware to handle the file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// handle the POST request to /test
router.post("/", upload.single("anpr.xml"), (req, res) => {
  // use xml2js to parse the XML data in the request body
  const parser = new Parser();
  parser.parseString(req.file.buffer.toString(), (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send("Error parsing XML");
    } else {
      // handle the parsed data as needed
      console.log(result);
      res.send("Success");
    }
  });
});

router.get("/", async (req, res) => {
  try {
    const response = "Hello World!";
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as testRouter };
