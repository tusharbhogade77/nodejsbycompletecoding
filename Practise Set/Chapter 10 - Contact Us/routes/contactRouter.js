const express = require("express");
const path = require("path");

const rootDir = require("../utils/pathUtil");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("inside contactRouter.post", req.body);
  console.log("handling /contact-us for POST", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact-success.html"));
});

module.exports = contactRouter;
