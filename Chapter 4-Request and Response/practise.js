const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome to the Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if(req.url === "/men") {
    res.write('<h1>Men\'s Section</h1>');
    return res.end();
  }else if(req.url === "/women") {
    res.write('<h1>Women\'s Section</h1>');
    return res.end();
  }else if(req.url === "/kids") {
    res.write('<h1>Kids\' Section</h1>');
    return res.end();
  }else if(req.url === "/cart") {
    res.write('<h1>Cart Section</h1>');
    return res.end();
  }
    
  res.write(
    `
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>
    `
  );
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
