import PropTypes from "prop-types";
import { useState } from "react";
import { debounce } from "../utils";

export const Filter = ({ teams = [], onChange }) => {
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleTeamChange = debounce((event) => {
    let value = event.target.value;
    setSelectedTeam(value);
    onChange(value);
  })

  return (
    <select
      value={selectedTeam}
      onChange={handleTeamChange}
      className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
  teams: PropTypes.object,
};
