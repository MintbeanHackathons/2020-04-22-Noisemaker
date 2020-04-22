import React, {Component} from 'react';
import './Button.css';
const AudioContext = window.AudioContext
const sound = new AudioContext()

export class Button extends Component {
  constructor() {
    super()
    this.audioNode = React.createRef();
  }


  playSound = () => {
      this.audioNode.current.play()
  }


  render() {
    return (
      <section className="button-body">
        <audio ref={this.audioNode} id="noise" src="./A-Tone.mp3"></audio>
        <button className="button" onClick={this.playSound}>Hear Note</button>
      </section>
    )
  }
}

export default Button;
