import express from "express";
import multipart from "@szymmis/multipart";
import xml2js from "xml2js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 6969;
const database = process.env.DATABASE;

app.use(cors());
app.use(multipart());

app.post("/test", async (req, res) => {
  // console.log(req.headers);
  // console.log(req.body);
  // console.log(req.files);

  const anprData = await req.files["anpr.xml"].data;
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

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db is connect"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
