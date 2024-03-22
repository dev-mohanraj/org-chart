export function getNameInitials(name) {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
}

export function searchEmployees(employees, searchTerm) {
  return employees.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export function debounce(func, delay = 1000) {
  let clearTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(clearTimer);
    clearTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
