import { useEffect, useState } from "react";
import { Filter } from "../components/filter";
import { Search } from "../components/search";
import { UserList } from "../components/user.list";
import PropTypes from "prop-types";
import { searchEmployees } from "../utils";
import { Show } from "../components/show";

export const Content = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  useEffect(
    function initSearch() {
      setSearchResults(employees);
    },
    []
  );

  useEffect(
    function initSearch() {
      let results = searchEmployees(employees, searchTerm);
      setSearchResults(results);
    },
    [searchTerm]
  );

  const handleUserSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSearch = (queryString) => {
    setSearchTerm(queryString);
  };

  return (
    <section
      className={
        "z-40 flex md:flex-row flex-col justify-between h-full md:w-full w-screen md:overflow-hidden overflow-auto mobile-layout"
      }
    >
      <div className={"md:h-full md:w-1/5 w-full flex flex-col"}>
        <div className="border-b border-gray-200 p-4 flex gap-8">
          <Search onSearch={handleSearch} />
          <Filter />
        </div>

        <Show when={searchResults.length > 0}>
          <div className="overflow-auto">
            <UserList
              selectedEmployee={selectedEmployee}
              employeeList={searchResults}
              onClick={handleUserSelect}
            />
          </div>
        </Show>
        <Show when={searchResults.length === 0}>
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <p className="text-gray-500 text-lg">No results found</p>
            </div>
          </div>
        </Show>
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
