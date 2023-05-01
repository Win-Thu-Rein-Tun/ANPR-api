const express = require("express");
const multer = require("multer");
const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");
const xml2js = require("xml2js");

const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());
app.use(xmlparser());

// configure multer middleware to handle file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

app.post("/test", upload.array("file"), (req, res) => {
  const contentType = req.headers;

  console.log(contentType);

  const parser = new xml2js.Parser();

  parser.parseString(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send("Error parsing XML");
    } else {
      // handle the parsed data as needed
      console.log(result);
      console.log(req.files); // licensePlatePicture.jpg and detectionPicture.jpg are in req.files
      res.send("Success");
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
