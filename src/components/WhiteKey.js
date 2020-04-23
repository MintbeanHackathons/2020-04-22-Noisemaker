import React, {useState} from 'react'
import {StyledWhiteKey} from '../Styles'
import * as Tone from 'tone'

const WhiteKey = function ({note}) {
  const [pressed, setPressed] = useState(false)
  const synth = new Tone.Synth().toMaster()

  return (
    <StyledWhiteKey
      pressed={pressed}
      onMouseDown={() => {
        setPressed(true)
        synth.triggerAttackRelease(note, '8n')
      }}
      onMouseUp={() => {
        setPressed(false)
      }}
    ></StyledWhiteKey>
  )
}
export default WhiteKey
