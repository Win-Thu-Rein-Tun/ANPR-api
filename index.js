import express from "express";
import cors from "cors";
import multer from "multer";
import xmlparser from "express-xml-bodyparser";

const app = express();
const port = 6969;

app.use(cors()); // Allows incoming requests from any IP
app.use(xmlparser()); // Allows xml requests
// Start by creating some disk storage options:
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/uploads");
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
  // Sets saved filename(s) to be original filename(s)
});

// Set saved storage options:
const upload = multer({ storage: storage });

app.post("/test", upload.array("files"), (req, res) => {
  // Sets multer to intercept files named "files" on uploaded form data

  console.log(req.body); // Logs form body values
  console.log(req.files); // Logs any files
  res.json({ message: "File(s) uploaded successfully" });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
