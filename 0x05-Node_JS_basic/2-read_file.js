const countStudents = (path) => {
  const js = require('fs');
  try {
    const data = js.readFileSync(path, 'utf8');
    let csStudentsNo = 0;
    let csStudents = [];
    let sweStudentsNo = 0;
    let sweStudents = [];
    let my_string = data.toString();
    const students = my_string.split("\n");
    students.shift();
    students.pop();
    //const students = studentss.splice(-1);
    for (let i = 0; i < students.length; i++) {
      let student = students[i].split(',');
      //console.log(student);
        studentx = ({
         firstName: student[0],
         lastName: student[1],
         age: student[2],
         field: student[3]
        });
      if (studentx.field === 'CS') {
        csStudentsNo += 1;
        csStudents.push(` ${studentx.firstName}`);
        }
      else if (studentx.field === 'SWE') {
        sweStudentsNo += 1;
        sweStudents.push(` ${studentx.firstName}`);
        }
      //process.stdout.write(JSON.stringify(studentx));
      };
    process.stdout.write(`Number of students: ${students.length}\n`);
    process.stdout.write(`Number of students in CS: ${csStudentsNo}. List:${csStudents}\n`);
    process.stdout.write(`Number of students in SWE: ${sweStudentsNo}. List:${sweStudents}\n`);
  } catch (error) {
    throw new Error('Cannot load the database');
    }
  };

module.exports = countStudents;
