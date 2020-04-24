const Synth = new Tone.Synth();
Synth.toMaster();
Synth.triggerAttackRelease("C4", "8n");

recording = false;
song = [];

const Green = document.getElementById("green");
Green.addEventListener("mousedown", (e) => {
  const note = e.target.dataset.note;
  Synth.triggerAttackRelease(note, "8n");
});
const Blue = document.getElementById("blue");
Blue.addEventListener("mousedown", (e) => {
  const note = e.target.dataset.note;
  Synth.triggerAttackRelease(note, "8n");
});
const Red = document.getElementById("red");
Red.addEventListener("mousedown", (e) => {
  const note = e.target.dataset.note;
  Synth.triggerAttackRelease(note, "8n");
});
const Yellow = document.getElementById("yellow");
Yellow.addEventListener("mousedown", (e) => {
  const note = e.target.dataset.note;
  Synth.triggerAttackRelease(note, "8n");
});
const Board = document.getElementById("board");
Board.onclick = (e) => {
  if (recording) {
    song.push(e.target.dataset.note);
  }
};

const RecordButton = document.getElementById("record");
RecordButton.onclick = () => {
  //console.log(recording)
  recording = !recording;
  if (!recording) {
    console.log(song);
  }
};
const PlayRecordingButton = document.getElementById("play");

PlayRecordingButton.onclick = () => {
  //const song = ["C3", "Eb3", "G3", "Bb3"];
  const SongPart = new Tone.Sequence(
    function (time, note) {
      Synth.triggerAttackRelease(note,"10hz", time);
      console.log(note)
    },
    song,
    "8n"
  );
  SongPart.start();
  
  Tone.Transport.start();
};

//allows you to play the notes using your keyboard.
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "q":
      Synth.triggerAttackRelease(Green.dataset.note, "8n");
      if (recording) {song.push(Green.dataset.note);}
      return;
    case "w":
      Synth.triggerAttackRelease(Blue.dataset.note, "8n");
      if (recording) {song.push(Blue.dataset.note);}
      return;
    case "a":
      Synth.triggerAttackRelease(Red.dataset.note, "8n");
      if (recording) {song.push(Red.dataset.note);}
      return;
    case "s":
      Synth.triggerAttackRelease(Yellow.dataset.note, "8n");
      if (recording) {song.push(Yellow.dataset.note);}
      return;
    default:
      return;
  }
});
