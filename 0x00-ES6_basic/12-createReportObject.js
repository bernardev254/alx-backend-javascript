export default function createReportObject(employeesList) {
	return {
		allEmployees: {...employeesList},
		getNumberOfDepartments(employeesList){
			let count = 0;
			for (let [k, v] of Object.entries(employeesList)){
				count += 1;
			}
			return count;
		}
	};
}
