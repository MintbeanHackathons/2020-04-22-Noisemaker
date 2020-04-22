import React, {useState} from 'react'
import {StyledBlackKey} from '../Styles'
import * as Tone from 'tone'

const BlackKey = function ({note}) {
  const [pressed, setPressed] = useState(false)
  const synth = new Tone.Synth().toMaster()
  return (
    <StyledBlackKey
      pressed={pressed}
      onMouseDown={() => {
        setPressed(true)
        synth.triggerAttackRelease(note, '8n')
      }}
      onMouseUp={() => {
        setPressed(false)
      }}
    ></StyledBlackKey>
  )
}
export default BlackKey
