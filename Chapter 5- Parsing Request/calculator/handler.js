const {sumRequestHandler} = require('./sum')

const requestHandler = (req,res)=>{
  console.log(`Request URL: ${req.url} ${req.method}`);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
      <html>
        <head>
        <title>Calculator</title>
        </head>
          <body>
          <h1>Welcome to the Calculator</h1>
          <a href="/calculator">Go To Calculator d</a>
          </body>
      </html>    
      `
    )
    return res.end();
  }else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
      <html>
        <head>
        <title>Calculator</title>
        </head>
          <body>
          <h1>here is the calculatorr</h1>
          <form action='/calculator-result' method='POST'>
          <input type="text" placeholder="Enter first num" id="first" name="first">
          <input type="text" placeholder="Enter second num" id="second" name="second">
          <input type="submit" value="add">
          </form>
          </body>
      </html>    
      `
    )
    return res.end();
    }else if(req.url.toLowerCase() === '/calculator-result' && req.method === 'POST') {
      sumRequestHandler(req,res);
      return;
    }
  res.setHeader('Content-Type', 'text/html');
    res.write(
      `
      <html>
        <head>
        <title>Calculator</title>
        </head>
          <body>
          <h1>404 page does not exist</h1>
          <a href="/calculator">Go To Calculator d</a>
          </body>
      </html>    
      `);

};

exports.requestHandler = requestHandler;