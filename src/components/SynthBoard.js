import React from 'react'
import {WhiteKey, BlackKey} from '../components'
import {KeyboardContainer} from '../Styles'

const SynthBoard = function (props) {
  return (
    <KeyboardContainer>
      <WhiteKey note="C4" />
      <BlackKey note="C#4" />
      <WhiteKey note="D4" />
      <BlackKey note="D#4" />
      <WhiteKey note="E4" />
      <WhiteKey note="F4" />
      <BlackKey note="F#4" />
      <WhiteKey note="G4" />
      <BlackKey note="G#4" />
      <WhiteKey note="A4" />
      <BlackKey note="A#4" />
      <WhiteKey note="B4" />
      <WhiteKey note="C5" />
      <BlackKey note="C#5" />
      <WhiteKey note="D5" />
      <BlackKey note="D#5" />
      <WhiteKey note="E5" />
      <WhiteKey note="F5" />
      <BlackKey note="F#5" />
      <WhiteKey note="G5" />
      <BlackKey note="G#5" />
      <WhiteKey note="A5" />
      <BlackKey note="A#5" />
      <WhiteKey note="B5" />
      <WhiteKey note="C6" />
    </KeyboardContainer>
  )
}
export default SynthBoard
