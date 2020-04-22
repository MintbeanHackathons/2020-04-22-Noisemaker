const Synth= new Tone.Synth();
Synth.toMaster();
//Synth.triggerAttackRelease("C4","8n");

const Green = document.getElementById("green");
green.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  Synth.triggerAttackRelease(note,"8n")
});
const Blue = document.getElementById("blue");
blue.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  Synth.triggerAttackRelease(note,"8n")
});
const Red = document.getElementById("red");
red.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  Synth.triggerAttackRelease(note,"8n")
});
const Yellow = document.getElementById("yellow");
yellow.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  Synth.triggerAttackRelease(note,"8n")
});

//allows you to play the notes using your keyboard.  
document.addEventListener("keydown",e=>{
  switch(e.key){
    case "q":
      Synth.triggerAttackRelease(green.dataset.note,"8n");
      return;
    case "w":
      Synth.triggerAttackRelease(blue.dataset.note,"8n");
      return;
    case "a":
      Synth.triggerAttackRelease(red.dataset.note,"8n");
      return;
    case "s":
      Synth.triggerAttackRelease(yellow.dataset.note,"8n");
      return;
    default:
      return;
  }
})
