const express = require("express");
const multipart = require("@szymmis/multipart");

const app = express();

app.use(multipart());

app.post("/test", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.files);

  const anprData = req.files["anpr.xml"].data;
  console.log(anprData);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
