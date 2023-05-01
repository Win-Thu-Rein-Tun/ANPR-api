const express = require("express");
const multer = require("multer");
// const fileUpload = require("express-fileupload");
// const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");
const xml2js = require('xml2js');

const upload = multer({ dest: "uploads/", encoding: "multipart/form-data" });

const app = express();
app.use(cors());
// app.use(xmlparser());
// app.use(fileUpload());

app.post("/test", upload.any(), async (req, res) => {
  const contentType = req.headers;

  console.log(contentType);

  const parser = new xml2js.Parser();

  const json = await parser.parseStringPromise(req.files.xml.data);

  // parser.parseString(req.files.buffer.toString(), (err, result) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(400).send('Error parsing XML');
  //   } else {
  //     // handle the parsed data as needed
  //     console.log(result);
  //     res.send('Success');
  //   }
  // });
  console.log(json)
  console.log(req.body); // anpr.xml file is in req.body
  console.log(req.files); // licensePlatePicture.jpg and detectionPicture.jpg are in req.files
  res.status(200).send("Success!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
