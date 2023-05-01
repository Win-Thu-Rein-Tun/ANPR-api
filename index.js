const express = require("express");
const multer = require("multer");
const xml2js = require("xml2js");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

// configure multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// configure body parser middleware to handle the text/xml body
app.use(bodyParser.text({ type: "text/xml" }));

// define a route to handle the request
app.post("/test", upload.array("file"), (req, res) => {
  // parse the XML body using xml2js
  const parser = new xml2js.Parser();
  parser.parseString(req.body, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send("Error parsing XML body");
    }
    // handle the parsed XML data and uploaded files as needed
    console.log(result);
    console.log(req.files);
    res.send("Request handled successfully");
  });
});

// start the server
app.listen(3000, () => console.log("Server started on port 3000"));
