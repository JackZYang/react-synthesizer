import React, { Component } from "react";
import "./App.css";
import Oscillator from "./Oscillator.js";
import PianoRoll from "./PianoRoll.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Oscillator
          render={(playSound, stopSound, oscillators) => (
            <PianoRoll
              playSound={playSound}
              stopSound={stopSound}
              oscillators={oscillators}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
