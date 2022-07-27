export default function createIteratorObject(report) {
  const emps = [];
  /* eslint-disable */
  for (const [dept, members] of Object.entries(report.allEmployees)) {
    for (const emp of members){
      emps.push(emp);
    }
  }
  return emps;	
}
