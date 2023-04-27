import express from "express";
import cors from "cors";
import xmlparser from "express-xml-bodyparser";
import { testRouter } from "./routes/test.js";

const app = express();
const port = 6969;

app.use(cors());
app.use(xmlparser());

app.use("/test", testRouter);

app.get("/", async (req, res) => {
  try {
    const response = "Home";
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
