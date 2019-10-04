import React, {Component} from 'react';

let audioContext = new (window.AudioContext || window.webkitAudioContext)();

class Oscillator extends Component {
    
    playSound(){
        var oscillator = audioContext.createOscillator();
        oscillator.connect(audioContext.destination);
        oscillator.start();
    }

    render() {
        return (
            <div>
                <button onClick={this.playSound}>play</button>
            </div>
        )
    }
}

export default Oscillator