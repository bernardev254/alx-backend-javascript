export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      /* eslint-disable */
      let count = 0;
      for (const [k, v] of Object.entries(employeesList)) {
        count += 1;
      }
      return count;
    },
  };
}
