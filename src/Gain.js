import React from "react";

let Gain = ({ changeGain, gainValue }) => {
  return (
    <div className="gain">
      Gain:
      <div className="gain-control">
        <input
          type="range"
          min="0"
          max="1"
          value={gainValue}
          onChange={changeGain}
          step="0.01"
        />
      </div>
    </div>
  );
};

export default Gain;
