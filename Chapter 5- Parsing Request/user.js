const { log } = require('console');

const fs  = require('fs');

const requestHandler = (req, res) =>{
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

const body = [];

    req.on('data', (chunk) => {
      console.log('Received chunk:', chunk);
      body.push(chunk);
    });

    req.on('end', () => {
    const fullBody =  Buffer.concat(body).toString();
    console.log('Full body:', fullBody);
    const params = new URLSearchParams(fullBody);
    // const bodyObject = {};
    // for (const [key, value] of params.entries()) {
    //   bodyObject[key] = value;
    // }   
    const bodyObject = Object.fromEntries(params.entries());
    console.log('Parsed bodyObject:', bodyObject);
    fs.writeFileSync('user-data.txt', JSON.stringify(bodyObject))
  
    })
    
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
}

module.exports = requestHandler;
