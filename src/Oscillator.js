import React, { Component } from "react";

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode = audioContext.createGain();

class Oscillator extends Component {
  state = {
    oscillators: {}
  };

  playSound = midiNumber => {
    let oscillator = audioContext.createOscillator();
    // Waveform type
    oscillator.type = this.props.waveform;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    // Gain Value
    gainNode.gain.value = this.props.gainValue;
    oscillator.frequency.value = Math.pow(2, (midiNumber - 69) / 12) * 440;
    this.setState({
      oscillators: {
        ...this.state.oscillators,
        [midiNumber]: oscillator
      }
    });
    oscillator.start();
    console.log(this.props.gainValue);
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
