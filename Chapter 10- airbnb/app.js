const path = require("path");

//External Module
const express = require("express");

//Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use((req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
