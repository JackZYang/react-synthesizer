import React, { useState } from "react";
import "./App.css";
import Oscillator from "./Oscillator";
import ChangeWaveform from "./ChangeWaveform";
import Gain from "./Gain";
import Filter from "./Filter";

const App = () => {
  const [effects, setEffects] = useState({
    waveform: "sine",
    gainValue: 0.15,
    filterType: "lowpass",
    filterFreq: 15000
  });

  const inputChange = e => {
    setEffects({ ...effects, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="piano">
        <Oscillator
          waveform={effects.waveform}
          filterType={effects.filterType}
          filterFreq={effects.filterFreq}
          gainValue={effects.gainValue}
        />
      </div>
      <div className="effects">
        <ChangeWaveform changeWaveform={inputChange} />
        <Gain inputChange={inputChange} gainValue={effects.gainValue} />
        <Filter inputChange={inputChange} filterFreq={effects.filterFreq} />
      </div>
    </div>
  );
};

export default App;
