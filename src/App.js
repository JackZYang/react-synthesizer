import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator.js";
import PianoRoll from "./PianoRoll.js";

class App extends Component {
  state = {
    waveform: "sine"
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
        <select onChange={this.changeWaveform}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="sawtooth">Sawtooth</option>
        </select>
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
