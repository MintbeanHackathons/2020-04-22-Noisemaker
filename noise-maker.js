const synth= new Tone.Synth();
synth.toMaster();
//synth.triggerAttackRelease("C4","8n");

const green = document.getElementById("green");
green.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  synth.triggerAttackRelease(note,"8n")
});
const blue = document.getElementById("blue");
blue.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  synth.triggerAttackRelease(note,"8n")
});
const red = document.getElementById("red");
red.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  synth.triggerAttackRelease(note,"8n")
});
const yellow = document.getElementById("yellow");
yellow.addEventListener("mousedown",e=>{
  const note = e.target.dataset.note
  synth.triggerAttackRelease(note,"8n")
});

document.addEventListener("keydown",e=>{
  switch(e.key){
    case "q":
      synth.triggerAttackRelease(green.dataset.note,"8n");
      return;
    case "w":
      synth.triggerAttackRelease(blue.dataset.note,"8n");
      return;
    case "a":
      synth.triggerAttackRelease(red.dataset.note,"8n");
      return;
    case "s":
      synth.triggerAttackRelease(yellow.dataset.note,"8n");
      return;
    default:
      return;
  }
})
const RecordButton = document.getElementById("record");
const PlayButton = document.getElementById("play");
let Recording = false;
let song=[];
RecordButton.onclick=()=>{
  console.log(Recording);
  Recording = !Recording;
  return Recording
}
console.log("new line " + Recording);
const gamespace = document.getElementById("board");
gamespace.onclick = (e) => {
  song.push(e.target.dataset.note);
};
console.log(song)