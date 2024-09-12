const http = require('http');

// Define the port to listen on 3002)
const port = 3002;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

