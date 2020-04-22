import React from 'react';
import Key from '../components/key';
import { Synth } from "tone";

const synth = new Synth().toMaster();

const SynteH = () => {

  
  const clickDo = (label) => {
    console.log(label)
    synth.triggerAttackRelease(label, "8n");
  }

  const notes = [
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5",
  ]
  
  return (
    <div className="d-flex justify-content-center">
      { notes.map((note, index) => {
        return <Key key={index} keyClick={() => clickDo(note)} label={note} />
      })}
      
      
    </div>
  )
}

export default SynteH;
