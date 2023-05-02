const express = require("express");
const multer = require("multer");
const xml2js = require("xml2js");
const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");

const upload = multer();

const app = express();
app.use(cors());
app.use(xmlparser());

app.post("/test", upload.any(), (req, res, next) => {
  const header = req.headers;
  console.log(header);

  const jsonBody = xml2js(req.body);
  console.log(jsonBody);

  const jsonFiles = xml2js(req.files);
  console.log(jsonFiles);

  res.send("okay");
});

// configure multer middleware to handle file uploads

// start the server
app.listen(3000, () => console.log("Server started on port 3000"));
