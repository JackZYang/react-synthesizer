import React, { Component } from "react";

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode = audioContext.createGain();
let biquadFilter = audioContext.createBiquadFilter();

class Oscillator extends Component {
  state = {
    oscillators: {}
  };

  playSound = midiNumber => {
    let oscillator = audioContext.createOscillator();
    // Waveform type
    oscillator.type = this.props.waveform;
    oscillator.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    biquadFilter.type = "lowpass";
    biquadFilter.frequency.setValueAtTime(
      this.props.lowpassFreq,
      audioContext.currentTime
    );
    biquadFilter.gain.setValueAtTime(25, audioContext.currentTime);
    // Gain Value
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = this.props.gainValue;
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
