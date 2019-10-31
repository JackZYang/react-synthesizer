import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator";
import PianoRoll from "./PianoRoll";
import ChangeWaveform from "./ChangeWaveform";
import Gain from "./Gain";
import Filter from "./Filter";

class App extends Component {
  state = {
    waveform: "sine",
    gainValue: 0.15,
    filterType: "lowpass",
    filterFreq: 15000
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeWaveform = e => {
    this.setState({
      waveform: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <ChangeWaveform changeWaveform={this.changeWaveform} />
        <div className="piano">
          <Oscillator
            render={(playSound, stopSound) => (
              <PianoRoll playSound={playSound} stopSound={stopSound} />
            )}
            waveform={this.state.waveform}
            gainValue={this.state.gainValue}
            filterFreq={this.state.filterFreq}
            filterType={this.state.filterType}
          />
        </div>
        <Gain inputChange={this.inputChange} gainValue={this.state.gainValue} />
        <Filter
          inputChange={this.inputChange}
          filterFreq={this.state.filterFreq}
        />
      </div>
    );
  }
}

export default App;
