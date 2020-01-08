import React from "react";

const Filter = ({ inputChange, filterFreq }) => {
  return (
    <div className="filter" style={{ padding: "20px" }}>
      <select name="filterType" onChange={inputChange}>
        <option value="lowpass">Low Pass</option>
        <option value="bandpass">Band Pass</option>
        <option value="highpass">High pass</option>
      </select>
      <div className="filter-control">
        <input
          name="filterFreq"
          type="range"
          min="0"
          max="15000"
          value={filterFreq}
          onChange={inputChange}
          step="1"
        />
      </div>
      {filterFreq}Hz
    </div>
  );
};

export default Filter;
