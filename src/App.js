import React, {Component} from 'react';
import './App.css';
import Oscillator from './Oscillator.js'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Oscillator />
      </div>
    );
  }
}

export default App;
