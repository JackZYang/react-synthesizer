import React from "react";

let Lowpass = ({ knobControl, lowpassFreq }) => {
  return (
    <div className="lowpass" style={{ padding: "20px" }}>
      Low pass:
      <div className="lowpass-control">
        <input
          name="lowpassFreq"
          type="range"
          min="0"
          max="10000"
          value={lowpassFreq}
          onChange={knobControl}
          step="1"
        />
      </div>
      {lowpassFreq}
    </div>
  );
};

export default Lowpass;
