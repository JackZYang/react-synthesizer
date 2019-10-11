import React, { Component } from "react";

let audioContext = new AudioContext(),
  oscillator;

class Oscillator extends Component {
  state = {
    waveform: "sine",
    playing: false,
    oscillators: []
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

  playSound = freqNote => {
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = freqNote;
    this.state.oscillators.push(oscillator);
    oscillator.start(audioContext.currentTime);
  };

  stopSound = () => {
    this.state.oscillators.forEach(oscillator => oscillator.stop());
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
