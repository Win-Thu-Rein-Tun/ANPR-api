const express = require("express");
const multipart = require("@szymmis/multipart");

const app = express();

app.use(multipart());

app.post("/test", (req, res) => {
  console.log(req.fields);
  console.log(req.files);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
