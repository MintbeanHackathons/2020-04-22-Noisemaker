const synth = new Tone.MembraneSynth().toMaster();

const playMusic = () => {
  synth.triggerAttackRelease("C2", "8n");
};

const playLoop = () => {
  const loop = new Tone.Loop((time) => {
    // console.log(time);
    synth.triggerAttackRelease("C2", "2n");
  }, "4n").start(0);
  Tone.Transport.start();
};

const playSequence = () => {
  const notes = ["C3", "Eb3", "G3", "Bb3"];

  const synthPart = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "4n"
  );
  synthPart.start();
  Tone.Transport.start();
};

document.querySelector("#play").addEventListener("click", function () {
  // playMusic();
  // playLoop();
  playSequence();
});
