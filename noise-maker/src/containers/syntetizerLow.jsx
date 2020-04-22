import React from 'react';
import Key from '../components/key';
import { Synth } from "tone";

const synth = new Synth().toMaster();

const SynteL = () => {

  
  const clickDo = (label) => {
    console.log(label)
    synth.triggerAttackRelease(label, "8n");
  }

  const notes = [
    "C1", "D1", "E1", "F1", "G1", "A1", "B1", 
    "C2", "D2", "E2", "F2", "G2", "A2", "B2",
    "C3", "D3", "E3", "F3", "G3", "A3", "B3",
  ]
  
  return (
    <div className="d-flex justify-content-center">
      { notes.map((note, index) => {
        return <Key key={index} keyClick={() => clickDo(note)} label={note} />
      })}
      
      
    </div>
  )
}

export default SynteL;
