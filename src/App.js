import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator";
import ChangeWaveform from "./ChangeWaveform";
import Gain from "./Gain";
import PianoRoll from "./PianoRoll";

class App extends Component {
  state = {
    waveform: "sine",
    gainValue: 0.1
  };

  changeGain = e => {
    this.setState({
      gainValue: e.target.value
    });
  };

  changeWaveform = e => {
    switch (e.target.value) {
      case "sine":
        this.setState({
          waveform: "sine"
        });
        break;
      case "square":
        this.setState({
          waveform: "square"
        });
        break;
      case "triangle":
        this.setState({
          waveform: "triangle"
        });
        break;
      case "sawtooth":
        this.setState({
          waveform: "sawtooth"
        });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <ChangeWaveform changeWaveform={this.changeWaveform} />
        <Oscillator
          render={(playSound, stopSound) => (
            <PianoRoll playSound={playSound} stopSound={stopSound} />
          )}
          waveform={this.state.waveform}
          gainValue={this.state.gainValue}
        />
        <Gain changeGain={this.changeGain} gainValue={this.state.gainValue} />
      </div>
    );
  }
}

export default App;
