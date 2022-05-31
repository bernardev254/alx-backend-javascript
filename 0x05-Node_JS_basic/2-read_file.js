const process = require('process');
const fs = require('fs');
const countStudents = function() {
	path = process.argv[1];
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.error("Cannot load the database");
			return;
		}
		for (let i = 0; data[0]; i++) {

