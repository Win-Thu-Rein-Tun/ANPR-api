import express from "express";
import cors from "cors";
import { testRouter } from "./routes/test.js";

const app = express();
const port = 6969;

app.use(cors());

app.use("/auth", testRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
