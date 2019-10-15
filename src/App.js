import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator.js";
import ChangeWaveform from "./ChangeWaveform.js";
import PianoRoll from "./PianoRoll.js";

class App extends Component {
  state = { waveform: "sine" };

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
    console.log(this.state.waveform);
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
        />
      </div>
    );
  }
}

export default App;
