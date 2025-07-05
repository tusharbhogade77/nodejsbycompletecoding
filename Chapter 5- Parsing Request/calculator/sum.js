const sumRequestHandler = (req, res) => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log('Parsed Body:', parsedBody);
    const params = new URLSearchParams(parsedBody);
    const bodyObject = Object.fromEntries(params.entries());
    console.log('Parsed bodyObject:', bodyObject);
    const result = parseInt(bodyObject.first) + parseInt(bodyObject.second);
    console.log('Sum Result:', result);
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head><title>Calculator Result</title></head>
        <body>
          <h1>Sum Result: ${result}</h1>
          <a href="/calculator">Back to Calculator</a>
        </body>
      </html>
    `);
  });
};

exports.sumRequestHandler = sumRequestHandler;