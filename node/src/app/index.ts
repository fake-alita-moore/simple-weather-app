import api from "src/services/api";
import { Request, Response, Error } from "express";

const bodyParser = require("body-parser");
const express = require('express');
const methodOverride = require("method-override");

/**
 * Adds standard headers to all responses
 */
const configureHeaders = function (req: Request, res: Response, next: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Methods",
      "GET, OPTIONS, POST, PUT, DELETE"
  );
  return next();
};

/**
 * Logs and returns human readible error
 */
const exceptionHandler = (err: Error, req: Request, res: Request, next) => {
  console.log(`API Error: ${req.method} ${req.path}`);
  console.log("--- Route Parameters ---");
  console.log(req.params);
  console.log("---     Headers      ---");
  console.log(req.headers);
  console.log("---   Error Stack    ---");
  console.log(err.stack);
  console.log("---      Error       ---");
  console.log(err.message);


  res.send({
    statusCode: err.statusCode,
    body: {
      message: err.message,
      code: err.statusCode,
      success: false
    }
  })

  return next();
}

const startApp = () => {

  const app = express();
  // Parses requests
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));

  // Route through server
  app.use(configureHeaders);
  app.use("/api", api);

  // Exception handling
  app.use(methodOverride());
  app.use(exceptionHandler);

  // Instantiate server
  const server = require('http').createServer(app);
  server.listen("5000");
  console.log("Listening at port 5000...")
  
  return app
}

export default startApp