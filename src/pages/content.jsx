import { useState } from "react";
import { Filter } from "../components/filter";
import { Search } from "../components/search";
import { UserList } from "../components/user.list";
import PropTypes from "prop-types";

export const Content = ({ employees }) => {
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const handleUserSelect = (employee) => {
    setSelectedEmployee(employee)
  };

  return (
    <section
      className={
        "z-40 flex md:flex-row flex-col justify-between h-full md:w-full w-screen md:overflow-hidden overflow-auto mobile-layout"
      }
    >
      <div className={"md:h-full md:w-1/5 w-full flex flex-col"}>
        <div className="border-b border-gray-200 p-4 flex gap-8">
          <Search />
          <Filter />
        </div>
        <div className="overflow-auto">
          <UserList selectedEmployee={selectedEmployee} employeeList={employees} onClick={handleUserSelect} />
        </div>
      </div>
      <div className={"h-full md:w-4/5 w-full overflow-y-auto gap-2 shadow-lg"}>
        Chart View
      </div>
    </section>
  );
};

Content.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      designation: PropTypes.string,
      team: PropTypes.string,
    })
  ),
};
