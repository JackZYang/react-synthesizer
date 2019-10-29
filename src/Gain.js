import React from "react";

let Gain = ({ knobControl, gainValue }) => {
  return (
    <div className="gain" style={{ padding: "20px" }}>
      Gain:
      <div className="gain-control">
        <input
          name="gainValue"
          type="range"
          min="0"
          max="1"
          value={gainValue}
          onChange={knobControl}
          step="0.01"
        />
      </div>
      {gainValue}
    </div>
  );
};

export default Gain;
