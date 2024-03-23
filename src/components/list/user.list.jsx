import PropTypes from "prop-types";
import { getNameInitials } from "../../utils";

export const UserList = ({ employeeList, onClick, selectedEmployee }) => {
  return (
    <>
      {employeeList.map((employee) => (
        <div
          key={employee.name}
          onClick={() => onClick(employee)}
          className={`flex items-center border-b border-slate-500 py-2 px-4 hover:bg-slate-100 cursor-pointer flex gap-4 overflow-auto ${
            selectedEmployee.id === employee.id ? "bg-slate-300" : ""
          }`}
        >
          <div className={`rounded-full w-10 h-10 bg-gray-300 flex items-center justify-center ${ selectedEmployee.id === employee.id ? "bg-white" : "bg-slate-300"}`}>
            <p className="text-gray-600 text-lg font-semibold">
              {getNameInitials(employee.name)}
            </p>
          </div>
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
      id: PropTypes.string,
      name: PropTypes.string,
      designation: PropTypes.string,
      team: PropTypes.string,
    })
  ),
  selectedEmployee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    designation: PropTypes.string,
    team: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
