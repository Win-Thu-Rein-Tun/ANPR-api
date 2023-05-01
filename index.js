const express = require("express");
const multer = require("multer");
const xml2js = require("xml2js");
const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(xmlparser());

app.post("/test", function (req, res, next) {
  console.log("Raw XML: " + req.rawBody);
  console.log("Parsed XML: " + JSON.stringify(req.body));

  res.send("okay");
});

// configure multer middleware to handle file uploads

// start the server
app.listen(3000, () => console.log("Server started on port 3000"));
