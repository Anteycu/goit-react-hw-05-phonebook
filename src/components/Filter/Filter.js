import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

export function Filter({ value, changeFilter }) {
  return (
    <div className={"Container"}>
      <input
        className={"FilterInput"}
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
