import React from 'react'
import {WhiteKey, BlackKey} from '../components'
import {KeyboardContainer} from '../Styles'

const SynthBoard = function (props) {
  return (
    <KeyboardContainer>
      <div>
        <WhiteKey note="C4" />
        <BlackKey note="C#4" />
      </div>
      <div>
        <WhiteKey note="D4" />
        <BlackKey note="D#4" />
      </div>
      <div>
        <WhiteKey note="E4" />
      </div>
      <div>
        <WhiteKey note="F4" />
        <BlackKey note="F#4" />
      </div>
      <div>
        <WhiteKey note="G4" />
        <BlackKey note="G#4" />
      </div>
      <div>
        <WhiteKey note="A4" />
        <BlackKey note="A#4" />
      </div>
      <div>
        <WhiteKey note="B4" />
      </div>
      <div>
        <WhiteKey note="C5" />
        <BlackKey note="C#5" />
      </div>
      <div>
        <WhiteKey note="D5" />
        <BlackKey note="D#5" />
      </div>
      <div>
        <WhiteKey note="E5" />
      </div>
      <div>
        <WhiteKey note="F5" />
        <BlackKey note="F#5" />
      </div>
      <div>
        <WhiteKey note="G5" />
        <BlackKey note="G#5" />
      </div>
      <div>
        <WhiteKey note="A5" />
        <BlackKey note="A#5" />
      </div>
      <div>
        <WhiteKey note="B5" />
      </div>
      <div>
        <WhiteKey note="C6" />
      </div>
    </KeyboardContainer>
  )
}
export default SynthBoard
