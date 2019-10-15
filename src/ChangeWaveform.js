import React from "react";

let ChangeWaveform = ({ changeWaveform }) => {
  return (
    <select onChange={changeWaveform}>
      <option value="sine">Sine</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
      <option value="sawtooth">Sawtooth</option>
    </select>
  );
};

export default ChangeWaveform;
