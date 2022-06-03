const http = require('http');
const hostName = 'localhost';
const port = '1234';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(port, hostName);

module.exports = app;

