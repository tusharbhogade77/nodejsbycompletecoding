const express = require("express");
const path = require("path");

const rootDir = require("./utils/pathUtil");

//Local Module
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
