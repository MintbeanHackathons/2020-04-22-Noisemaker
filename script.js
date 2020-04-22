window.onload = function() {

const synth = new Tone.PolySynth(2, Tone.Synth, {
    oscillator : {
          type : "square"
      }
  }).toMaster();
   
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
    synth.triggerAttack(e.detail.name)
  })
  
  document.querySelector('tone-keyboard').addEventListener('noteoff', e => {
    synth.triggerRelease()
  })

}
//attach a listener to the keyboard events
