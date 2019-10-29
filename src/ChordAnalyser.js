import React, { Component } from "react";

class ChordAnalyser extends Component {
  state = {
    empty: false
  };

  checkEmpty = () => {
    console.log(this.props.oscillators);
  };

  render() {
    return (
      <div className="chords">
        {this.state.empty && this.props.oscillators}
        <button onClick={this.checkEmpty} />
      </div>
    );
  }
}

export default ChordAnalyser;
