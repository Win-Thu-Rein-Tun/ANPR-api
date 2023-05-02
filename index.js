const express = require("express");
const multipart = require("@szymmis/multipart");
const xml2js = require("xml2js");

const app = express();

app.use(multipart());

app.post("/test", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.files);

  xml2js.parseString(req.files.anpr.xml.data, (err, result) => {
    if (err) throw err;
    console.log(result);
    // Do something with the parsed object
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
