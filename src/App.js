import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator";
import PianoRoll from "./PianoRoll";
import ChangeWaveform from "./ChangeWaveform";
import Gain from "./Gain";
import Lowpass from "./Lowpass";

class App extends Component {
  state = {
    waveform: "sine",
    gainValue: 0.15,
    lowpassFreq: 500
  };

  knobControl = e => {
    this.setState({
      [e.target.name]: e.target.value
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
        <div className="piano">
          <Oscillator
            render={(playSound, stopSound) => (
              <PianoRoll playSound={playSound} stopSound={stopSound} />
            )}
            waveform={this.state.waveform}
            gainValue={this.state.gainValue}
            lowpassFreq={this.state.lowpassFreq}
          />
        </div>
        <Gain knobControl={this.knobControl} gainValue={this.state.gainValue} />
        <Lowpass
          knobControl={this.knobControl}
          lowpassFreq={this.state.lowpassFreq}
        />
      </div>
    );
  }
}

export default App;
