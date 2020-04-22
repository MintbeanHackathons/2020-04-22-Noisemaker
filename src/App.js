import React, { useState } from 'react'
import './App.css'

import * as Tone from 'tone'

function App() {
  //create a synth and connect it to the master output (your speakers)
  const [synthPreset, setSynthPreset] = useState({
    on: false,
    adsr: [0, 0, 0, 0]
  })
  const synth = synthPreset.on
    ? new Tone.Synth({
        oscillator: {
          type: 'pwm',
          modulationFrequency: 0.2
        },
        envelope: {
          attack: synthPreset.adsr[0],
          decay: synthPreset.adsr[1],
          sustain: synthPreset.adsr[2],
          release: synthPreset.adsr[3]
        }
      }).toMaster()
    : new Tone.Synth().toMaster()

  const handleClick = (evt) => {
    //play note (determined by evt.target) for the duration of an 8th note
    synth.triggerAttackRelease(evt.target.value, '8n')
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClick} value="C6"></button>
        <button onClick={handleClick} value="D6"></button>
        <button onClick={handleClick} value="E6"></button>
        <button onClick={handleClick} value="F6"></button>
        <button onClick={handleClick} value="G6"></button>
        <button onClick={handleClick} value="A6"></button>
        <button onClick={handleClick} value="B6"></button>
      </div>
      <div>
        <button onClick={handleClick} value="C5"></button>
        <button onClick={handleClick} value="D5"></button>
        <button onClick={handleClick} value="E5"></button>
        <button onClick={handleClick} value="F5"></button>
        <button onClick={handleClick} value="G5"></button>
        <button onClick={handleClick} value="A5"></button>
        <button onClick={handleClick} value="B5"></button>
      </div>
      <div>
        <button onClick={handleClick} value="C4"></button>
        <button onClick={handleClick} value="D4"></button>
        <button onClick={handleClick} value="E4"></button>
        <button onClick={handleClick} value="F4"></button>
        <button onClick={handleClick} value="G4"></button>
        <button onClick={handleClick} value="A4"></button>
        <button onClick={handleClick} value="B4"></button>
      </div>
      <div>
        <button onClick={handleClick} value="C3"></button>
        <button onClick={handleClick} value="D3"></button>
        <button onClick={handleClick} value="E3"></button>
        <button onClick={handleClick} value="F3"></button>
        <button onClick={handleClick} value="G3"></button>
        <button onClick={handleClick} value="A3"></button>
        <button onClick={handleClick} value="B3"></button>
      </div>
      <div>
        <button onClick={handleClick} value="C2"></button>
        <button onClick={handleClick} value="D2"></button>
        <button onClick={handleClick} value="E2"></button>
        <button onClick={handleClick} value="F2"></button>
        <button onClick={handleClick} value="G2"></button>
        <button onClick={handleClick} value="A2"></button>
        <button onClick={handleClick} value="B2"></button>
      </div>
      <div>
        <button
          id="synth"
          onClick={() =>
            setSynthPreset({
              on: !synthPreset.on,
              adsr: [Math.random(), Math.random(), Math.random(), Math.random()]
            })
          }
        >
          {synthPreset.on ? 'Back to vanilla sound' : 'Change that sound!'}
        </button>
      </div>
    </div>
  )
}

export default App
