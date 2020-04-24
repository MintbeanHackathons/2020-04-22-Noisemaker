const Synth = new Tone.Synth();
Synth.toMaster();
//Synth.triggerAttackRelease("C4", "8n");

recording = false;
playing = false;
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
  RecordButton.innerHTML="Recording ....";
  recording = !recording;
  if (!recording) {
    RecordButton.innerHTML="Record"
  }
};
const PlayRecordingButton = document.getElementById("play");

PlayRecordingButton.onclick = () => {
  console.log(playing);
  playing = !playing;

  //const song = ["C3", "Eb3", "G3", "Bb3"];
  const SongPart = new Tone.Sequence(
    function (time, note) {
      Synth.triggerAttackRelease(note, "10hz");
      // console.log(note);
    },
    song,
    "8n"
  );
  SongPart.start();

  Tone.Transport.start();
  if (playing) {
    console.log('play song');
    SongPart.start();

    Tone.Transport.start();
    document.getElementById('play').innerHTML='stop';
  }
  else{
    console.log('stop song');
    SongPart.stop();
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    Tone.Transport.cancel();
    document.getElementById('play').innerHTML='play';
  }
};

//allows you to play the notes using your keyboard.
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "q":
      Synth.triggerAttackRelease(Green.dataset.note, "8n");
      if (recording) {
        song.push(Green.dataset.note);
      }
      return;
    case "w":
      Synth.triggerAttackRelease(Blue.dataset.note, "8n");
      if (recording) {
        song.push(Blue.dataset.note);
      }
      return;
    case "a":
      Synth.triggerAttackRelease(Red.dataset.note, "8n");
      if (recording) {
        song.push(Red.dataset.note);
      }
      return;
    case "s":
      Synth.triggerAttackRelease(Yellow.dataset.note, "8n");
      if (recording) {
        song.push(Yellow.dataset.note);
      }
      return;
    default:
      return;
  }
});
