export default function createEmployeesObject(departmentName, employees) {
  const emps = [];
  for (const emp of employees) {
    emps.push(emp);
  }
  return {
    [departmentName]: emps,
  };
}
