import express from "express";
import cors from "cors";
import multer from "multer";
import xmlparser from "express-xml-bodyparser";
import xml2js from "xml2js";
import fileUpload from "express-fileupload";

const app = express();
const port = 6969;

app.use(cors()); // Allows incoming requests from any IP
app.use(xmlparser()); // Allows xml requests
app.use(fileUpload()); // Configure the file upload middleware
// // Start by creating some disk storage options:
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, __dirname + "/uploads");
//   },
//   // Sets file(s) to be saved in uploads folder in same directory
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
//   // Sets saved filename(s) to be original filename(s)
// });

// // Set saved storage options:
// const upload = multer({ storage: storage });

// app.post("/test", upload.array("files"), (req, res) => {
//   // Sets multer to intercept files named "files" on uploaded form data

//   console.log(req.body); // Logs form body values
//   console.log(req.files); // Logs any files
//   res.json({ message: "File(s) uploaded successfully" });
// });

app.post("/test", async (req, res) => {
  if (req.files) {
    console.log(req.files);

    const file = req.files.files;
    const fileName = file.name;

    file.mv("./uploads/" + fileName, (err) => {
      if (err) {
        res.send(err);
      }
    });

    res.send("file upload working!!");
    //     var params = {
    //         Bucket: "imagestoreopenforum",
    //         Key:
    //           "postimages/" +
    //           Math.random().toString(36).substring(7) +
    //           path.extname(req.files["photo"].name),
    //         Body: req.files["photo"].data,
    //         ACL: "public-read",
    //       };
    //       s3.upload(params, function (perr, pres) {
    //         if (perr) {
    //           console.log("Error uploading data: ", perr);
    //         } else {
    //           post.photo = pres.Location;
    //           post.save((err, result) => {
    //             if (err) res.json(err);
    //             else res.json(result);
    //           });
    //         }
    // })}
  }
});

// app.post("/test", async (req, res) => {
//   try {
//     // Check if a file was uploaded
//     if (!req.files || !req.files.xml) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     // Parse the XML data to JSON
//     const parser = new xml2js.Parser();
//     const json = await parser.parseStringPromise(req.files.xml.data);

//     // Send the JSON response
//     res.json(json);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.listen(port, () => console.log(`Server is running on port: ${port}`));
