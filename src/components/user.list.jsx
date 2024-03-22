import PropTypes from "prop-types";

export const UserList = ({ employeeList }) => {
  return (
    <>
      {employeeList.map((employee) => (
        <div
          key={employee.name}
          className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer"
        >
          <div>
            <p className="font-semibold">{employee.name}</p>
            <p className="text-sm">{employee.designation}</p>
            <p className="text-sm text-gray-500">{employee.team}</p>
          </div>
        </div>
      ))}
    </>
  );
};

UserList.propTypes = {
  employeeList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      designation: PropTypes.string,
      team: PropTypes.string,
    })
  ),
};
