import PropTypes from "prop-types";
import { useState } from "react";

export const Filter = ({ teams = [], onChange }) => {
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleTeamChange = (event) => {
    let value = event.target.value;
    setSelectedTeam(value);
    onChange(value);
  }

  return (
    <select
      value={selectedTeam}
      onChange={handleTeamChange}
      className="w-full max-w-[200px] py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
      <option value="" className="text-ellipsis">All</option>
      {teams.map((team, index) => (
        <option key={index} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  teams: PropTypes.array,
};
