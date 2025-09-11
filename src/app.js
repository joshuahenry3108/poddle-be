import express from "express";
import connectDB from "./database/index.js";

let app = express();


const startServer = async () => {
  console.log(process.env);
  await connectDB();
  // Define request response in root URL (/) 
  // updating fule
  app.get("/", function (req, res) {
    res.send("Dockerize the node app changed");
  });

  // Define request response in root URL (/)
  // added another line
  app.get("/health", function (req, res) {
    res.json({
      success: true,
    });
  });

  // Launch listening server on port 8081
  app.listen(8080, function () {
    console.log("app listening on port 8080");
  });
};

startServer();
