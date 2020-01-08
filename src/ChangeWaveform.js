import React from "react";

const ChangeWaveform = ({ changeWaveform }) => {
  return (
    <div className="waveform" style={{ padding: "20px" }}>
      Waveform:
      <div className="waveform-control">
        <select name="waveform" onChange={changeWaveform}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="sawtooth">Sawtooth</option>
        </select>
      </div>
    </div>
  );
};

export default ChangeWaveform;
