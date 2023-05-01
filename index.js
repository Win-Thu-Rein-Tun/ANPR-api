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

app.post("/test", upload.any(), (req, res) => {
  const contentType = req.headers;

  console.log(contentType);
  console.log(JSON.stringify(req.body));
  console.log(JSON.stringify(req.files)); // licensePlatePicture.jpg and detectionPicture.jpg are in req.files
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
