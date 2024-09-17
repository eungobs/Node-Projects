const http = require('http');

// Define the port to listen on (3002)
const port = 3002;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes and HTTP methods
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome to the root route!\n');
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the About page.\n');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page not found.\n');
    }
  } else if (req.method === 'POST') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('POST request received.\n');
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed.\n');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


 