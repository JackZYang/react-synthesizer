import React, { Component } from "react";

let audioContext = new AudioContext(),
  oscillator;

class Oscillator extends Component {
  state = {
    waveform: "sine",
    oscillators: {}
  };

  changeWaveform = e => {
    const id = e.target.id;
    switch (id) {
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

  playSound = midiNumber => {
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = Math.pow(2, (midiNumber - 69) / 12) * 440;
    this.state.oscillators[midiNumber] = oscillator;
    console.log(this.state.oscillators);
    oscillator.start();
  };

  stopSound = midiNumber => {
    this.state.oscillators[midiNumber].stop();
    delete this.state.oscillators[midiNumber];
    console.log(this.state.oscillators);
  };

  render() {
    return (
      <div>
        {this.props.render(
          this.playSound,
          this.stopSound,
          this.state.oscillators
        )}
      </div>
    );
  }
}

export default Oscillator;
