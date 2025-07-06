const http = require('http');

const server=http.createServer( (req, res) =>{
  console.log(req.url);
if(req.url === '/') {
  console.log('Home Page');
  
 res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My 111</title></head>');
  res.write('<body><h1>enter you detail!</h1></body>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username"><br>');
  res.write('<label for="male">male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="female">female</label>');
  res.write('<input type="radio" id="female" name="gender" value="female">');
  res.write('<button type="submit">Submit</button>');
  res.write('</form>');
  res.write('</html>');
  return res.end();
  } else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST') {
    console.log('Form Submitted');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Form Submitted</title></head>');
    res.write('<body><h1>Thank you for submitting your details!</h1></body>');
    res.write('</html>');
    return res.end();
  }
    console.log('Product Page');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my world!</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
 });
