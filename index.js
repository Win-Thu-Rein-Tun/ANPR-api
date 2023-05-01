const express = require("express");
const multer = require("multer");
const fileUpload = require("express-fileupload");
const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");

// const upload = multer({ dest: "uploads/", encoding: "multipart/form-data" });

const app = express();
app.use(cors());
app.use(xmlparser());
app.use(fileUpload());

app.post("/test", (req, res) => {
  const contentType = req.headers;

  console.log(contentType);
  console.log(req.body); // anpr.xml file is in req.body
  console.log(req.files); // licensePlatePicture.jpg and detectionPicture.jpg are in req.files
  res.status(200).send("Success!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
