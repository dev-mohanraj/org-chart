import PropTypes from "prop-types";
import { useState } from "react";

export const Filter = ({ teams = [], onChange }) => {
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleTeamChange = (event) => {
    let value = event.target.value;
    setSelectedTeam(value === "All" ? "" : value);
    onChange(value === "All" ? "" : value);
  };

  return (
    <div className="relative">
      <select
        value={selectedTeam}
        onChange={handleTeamChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value={"All"} className="text-ellipsis">All</option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 7l5 5 5-5z" />
        </svg>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  teams: PropTypes.array,
};
