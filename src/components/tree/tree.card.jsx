import React from "react";
import PropTypes from "prop-types";

import { getNameInitials } from "../../utils";

export const TreeCard = (props) => {
  let { name, team, designation, selectedEmployee, id } = props;
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 min-w-[250px] ${
        selectedEmployee.id === id ? "bg-slate-300" : ""
      }`}
    >
      <div className="flex items-center">
        <div
          className={`h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-semibold ${
            selectedEmployee.id === id ? "bg-white" : "bg-slate-300"
          }`}
        >
          {getNameInitials(name)}
        </div>
        <div className="ml-4 flex flex-col items-start">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{team}</p>
          <p className="text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
  );
};

TreeCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  team: PropTypes.string,
  selectedEmployee: PropTypes.object,
};
