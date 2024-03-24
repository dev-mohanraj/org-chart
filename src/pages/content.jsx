import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  debounce,
  filterEmployeesByTeams,
  filterTeams,
  searchEmployees,
} from "../utils";
import {
  Filter,
  Search,
  TreeView,
  UserList,
  Show,
} from "../components/index.jsx";

export const Content = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [team, setTeam] = useState("All");

  useEffect(() => {
    setSelectedEmployee(employees[0]);
  }, []);

  useEffect(
    function initSearch() {
      let results = searchEmployees(employees, searchTerm);
      setSearchResults(results);
    },
    [searchTerm]
  );

  const handleUserSelect = (employee) => {
    setSelectedEmployee(employee);
    const element = document.getElementById(employee.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSearch = (queryString) => {
    setSearchTerm(queryString);
  };

  const handleFilter = (value) => {
    setTeam(value === "" ? "All" : value);
    let result = filterEmployeesByTeams(employees, value);
    setSearchResults(result);
  };

  const teams = filterTeams(employees);
  const handleSearchDebounce = debounce(handleSearch);

  return (
    <section
      className={
        "w-full h-full z-40 flex md:flex-row flex-col justify-between w-screen md:overflow-hidden overflow-auto mobile-layout"
      }
    >
      <div className={"flex flex-col min-w-[400px] w-[400px]"}>
        <div className="border-b-[2px] border-gray-400 p-4 flex gap-8 justify-between">
          <Search onSearch={handleSearchDebounce} />
          <Filter teams={teams} onChange={handleFilter} />
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
      <div className={"overflow-auto gap-2 shadow-lg bg-gray-100 w-full"}>
        <TreeView
          selectedEmployee={selectedEmployee}
          employees={searchResults}
          team={team}
        />
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
