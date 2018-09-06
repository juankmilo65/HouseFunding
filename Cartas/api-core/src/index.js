const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");
const { mongoose } = require("./database");
const app = express();
//const schema from "./schema";

//Settings
app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));

//Meddlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/tasks", require("./routes/task.routes"));
app.use("/api/files", require("./routes/file.routes"));

//Cors
app.use(cors());

//File Upload
app.use(fileUpload());

//Statics files
// console.log(path.join("localhost:3000", "public"));
// app.use(express.static(path.join("localhost:3000", "public")));

//Starting Server
app.listen(app.get("port"), () => {
  console.log("Server Initialized");
});
