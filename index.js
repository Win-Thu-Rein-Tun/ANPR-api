const multer = require("multer");
const xml2js = require("xml2js");
const express = require("express");

const app = express();

const upload = multer().any();

function parseXML(req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const xmlString = req.files[0].buffer.toString();
      xml2js.parseString(xmlString, function (err, result) {
        if (err) {
          next(err);
        } else {
          req.body = result;
          next();
        }
      });
    }
  });
}

app.post("/test", parseXML, function (req, res, next) {
  // req.body contains the parsed XML as a JavaScript object
  // handle the data here

  const header = req.headers;
  console.log(header);

  console.log(req.body);
  // console.log(req.files);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
