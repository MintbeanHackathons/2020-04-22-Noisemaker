// Create the new Tone.js instance
const synth = new Tone.Synth().toMaster();

// This is a dictionary object to store the songs we want to play
let playlist = {
  missionImpossible: [
    "G2",
    [null, "G2"],
    null,
    "Bb2",
    "C3",
    "G2",
    [null, "G2"],
    null,
    "F2",
    "F#2",
  ],
  twinkleTwinkle: [
    "C2",
    "C2",
    "G2",
    "G2",
    "A2",
    "A2",
    "G2",
    null,
    "F2",
    "F2",
    "E2",
    "E2",
    "D2",
    "D2",
    "C2",
    null,
  ],
};

// This plays a single note (once), it's left here for future reference
const playNote = () => {
  synth.triggerAttackRelease("C2", "8n");
};

// This plays a loop of a single note, it's left here for future reference
const playLoop = () => {
  const loop = new Tone.Loop((time) => {
    synth.triggerAttackRelease("C2", "2n");
  }, "4n").start(0);
};

// This takes an array of notes, and loads them into the synth object
const playSequence = (notes) => {
  const synthPart = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "4n"
  );
  synthPart.start();
};

// Controls the player (toggles on/off)
let playing = false;

// playSequence(playlist["missionImpossible"]);
playSequence(playlist["twinkleTwinkle"]);

// Adds a listener to the play button, and acts as a play/stop button
document.querySelector("#play").addEventListener("click", function () {
  // Check if the music is playing, then make it do the opposite
  if (!playing) {
    playing = true;
    Tone.Transport.start();
  } else {
    playing = false;
    Tone.Transport.stop();
  }
});
