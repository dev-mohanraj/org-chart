import React from "react";
import PropTypes from "prop-types";

import { getNameInitials } from "../../utils";

export const TreeCard = (props) => {
  let { name, team, designation, selectedEmployee, id, imageUrl } = props;
  return (
    <div
      id={name}
      className={`bg-white rounded-lg shadow-md p-4 w-[300px]`}
      style={{ backgroundColor: selectedEmployee.id === id ? "#9ca3af" : "" }}
    >
      <div className="flex items-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className=" w-16 h-16 rounded-full mb-4 object-contain"
          />
        ) : (
          <div
            className={`h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-semibold`}
          >
            {getNameInitials(name)}
          </div>
        )}
        <div className="ml-4 flex flex-col items-start">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className={"text-gray-600"}>{team}</p>
          <p className={"text-gray-600 truncate text-ellipsis max-w-[200px]"}>
            {designation}
          </p>
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
  imageUrl: PropTypes.string,
  selectedEmployee: PropTypes.object,
};
