import React, { Component } from "react";
import MIDISounds from "midi-sounds-react";
// import Key2 from "./Key2";
import "./Piano.css";

class Piano extends Component {
  playKey1() {
    this.midiSounds.playChordNow(2, [60], 2.5);
  }

  playKey2() {
    this.midiSounds.playChordNow(285, [60], 2.5);
  }

  playKey3() {
    this.midiSounds.playChordNow(2, [80], 2.5);
  }

  playKey4() {
    this.midiSounds.playChordNow(2, [90], 2.5);
  }
  render() {
    return (
      <div>
        <div className="piano">
          <p>
            <button className="rectangle" onClick={this.playKey1.bind(this)}>
              Click me!
            </button>
            <button className="rectangle" onClick={this.playKey2.bind(this)}>
              Click me!
            </button>
            <button className="rectangle" onClick={this.playKey3.bind(this)}>
              Click me!
            </button>
            <button className="rectangle" onClick={this.playKey4.bind(this)}>
              Click me!
            </button>
          </p>
        </div>
        {/* <Key2 /> */}
        <div>
          <MIDISounds
            ref={(ref) => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[2, 285]}
          />
        </div>
      </div>
    );
  }
}

export default Piano;
