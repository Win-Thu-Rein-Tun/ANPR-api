const express = require("express");
const multipart = require("@szymmis/multipart");
const xml2js = require("xml2js");

const app = express();

app.use(multipart());

app.post("/test", (req, res) => {
  // console.log(req.headers);
  // console.log(req.body);
  // console.log(req.files);

  const anprData = req.files["anpr.xml"].data;
  const anprString = anprData.toString();
  // console.log(anprString);

  xml2js.parseString(anprString, (err, result) => {
    if (err) throw err;
    const jsonData = JSON.stringify(result);
    const obj = JSON.parse(jsonData);
    // console.log(obj);

    // This is Date data
    const dateTime = obj.EventNotificationAlert.dateTime[0];
    const humanReadableDate = new Date(dateTime).toLocaleString();
    console.log(humanReadableDate);

    // This is licensePlateNumber data
    const anprData = obj.EventNotificationAlert.ANPR[0];
    const licensePlate = anprData.licensePlate[0];
    console.log(`This is realtime license number : ${licensePlate} \n`);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
