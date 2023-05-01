const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.post("/test", upload.any(), (req, res) => {
  console.log(req.body); // anpr.xml file is in req.body
  console.log(req.files); // licensePlatePicture.jpg and detectionPicture.jpg are in req.files
  res.status(200).send("Success!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
