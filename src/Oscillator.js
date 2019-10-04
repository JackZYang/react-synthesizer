import React, { Component } from "react";

let audioContext = new (window.AudioContext || window.webkitAudioContext)();

class Oscillator extends Component {
  state = {
    waveform: "square",
    playing: false
  };

  changeWaveform = e => {
    const id = e.target.id;
    switch (id) {
      case "sin":
        this.setState({
          waveform: "sin"
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

  playSound = () => {
    var oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = this.state.waveform;
    oscillator.start();
  };

  render() {
    return (
      <div>
        <button onClick={this.playSound}>play</button>
        <button onClick={this.changeWaveform} id="sin">
          Sin
        </button>
        <button onClick={this.changeWaveform} id="square">
          Square
        </button>
        <button onClick={this.changeWaveform} id="triangle">
          Triangle
        </button>
        <button onClick={this.changeWaveform} id="sawtooth">
          Sawtooth
        </button>
        {this.state.waveform}
      </div>
    );
  }
}

export default Oscillator;
