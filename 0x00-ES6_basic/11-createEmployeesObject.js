export default function createEmployeesObject(departmentName, employees) {
	let emps = [];
	for (let emp of employees) {
		emps.push(emp)
	}
	return {
		[departmentName]: emps
	};
}
