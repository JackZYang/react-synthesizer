import React, { Component } from "react";

let audioContext = new AudioContext(),
  oscillator;

class Oscillator extends Component {
  state = {
    oscillators: {}
  };

  playSound = midiNumber => {
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = this.props.waveform;
    oscillator.frequency.value = Math.pow(2, (midiNumber - 69) / 12) * 440;
    this.setState({
      oscillators: {
        ...this.state.oscillators,
        [midiNumber]: oscillator
      }
    });
    oscillator.start();
  };

  stopSound = midiNumber => {
    this.state.oscillators[midiNumber].stop();
    delete this.state.oscillators[midiNumber];
  };

  render() {
    return <div>{this.props.render(this.playSound, this.stopSound)}</div>;
  }
}

export default Oscillator;
