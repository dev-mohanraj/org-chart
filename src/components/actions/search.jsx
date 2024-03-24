import { useState } from "react";
import PropTypes from "prop-types";

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    let query = event.target.value;
    setQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 min-w-[200px]"
    />
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
