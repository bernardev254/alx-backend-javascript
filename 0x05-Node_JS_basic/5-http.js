const http = require('http');
const countStudents = require('./2-read_file');
const db = process.argv[1];
//const students = countStudents(db);
const hostName = 'localhost';
const port = '1234';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  if (req.url === '/')
    res.end('Hello Holberton School!');
  if (req.url === '/students')
    res.end(JSON.stringify(countStudents(db)));
}).listen(port, hostName);

module.exports = app;

