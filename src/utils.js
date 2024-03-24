export function getNameInitials(name = "") {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
}

export function searchEmployees(employees, searchTerm) {
  const searchedEmployees = employees.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return searchedEmployees;
}

export function debounce(func, delay) {
  let clearTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(clearTimer);
    clearTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

export function filterTeams(employees) {
  return [
    ...new Set(
      employees
        .filter((employee) => employee.team)
        .map((employee) => employee.team)
    ),
  ];
}

export function filterEmployeesByTeams(employees, selectedTeam) {
  const filteredEmployees = selectedTeam
    ? employees.filter((employee) => employee.team === selectedTeam)
    : employees;
  return filteredEmployees;
}

export function buildEmployeeTree(employees, teamFilter) {
  const employeeMap = new Map();
  const rootEmployees = [];

  // Step 1: Create a map of employees and find root employees
  employees.forEach((employee) => {
    if (teamFilter !== "All" && employee.team !== teamFilter) return; // Skip employees not in the filtered team
    employee.children = [];
    employeeMap.set(employee.id, employee);
    if (!employee.managerId) rootEmployees.push(employee);
  });

  // Step 2: Connect employees to their managers
  employeeMap.forEach((employee) => {
    if (!employee.managerId) return; // Skip root employees
    const manager = employeeMap.get(employee.managerId);
    if (manager) {
      manager.children.push(employee);
    } else {
      // If manager is not found, add this employee as a root employee
      rootEmployees.push(employee);
    }
  });

  return rootEmployees;
}
