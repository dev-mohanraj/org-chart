export function getNameInitials(name) {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
}

export function searchEmployees(employees, searchTerm) {
  return employees.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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

export function buildEmployeeTree(employees) {
  const employeeMap = new Map();
  employees.forEach((employee) => {
    employee.children = [];
    employeeMap.set(employee.id, employee);
  });
  const rootEmployees = [];
  employeeMap.forEach((employee) => {
    if (employee.managerId) {
      const manager = employeeMap.get(employee.managerId);
      if (manager) {
        manager.children.push(employee);
      }
    } else {
      rootEmployees.push(employee);
    }
  });
  return rootEmployees;
}
