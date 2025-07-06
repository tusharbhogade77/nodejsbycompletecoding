//External Module
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first dummy middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second dummy middleware", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("Third middleware", req.url, req.method);
//   res.send('<h1>Hello from Tushar.express.com!</h1>');
// });

app.get("/", (req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.send("<h1>Hello from Tushar.express.com!</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form actiobn="/contact-us" method="POST">
      <input type="text" placeholder="Enter your name" id="name" name="name">
      <input type="email" placeholder="Enter your email" id="email" name="email">
      <input type="submit"/>
    </form>
      `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handling /contact-us for POST", req.url, req.method);
  res.send("<h1>Thank you for your details!</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
