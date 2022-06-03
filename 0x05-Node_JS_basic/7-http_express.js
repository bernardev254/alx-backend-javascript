const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.get('/students', (req, res) => {
  res.send(`This is the list of our students
Number of students in CS: 6
Number of students in SWE: 6`);
});
app.listen(port);

module.exports = app;

