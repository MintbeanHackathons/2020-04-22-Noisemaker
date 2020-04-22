function main() {
  // Play a sound using Tone.js and its synth instrument
  function bringTheNoise(note) {
    // Tone.js documentation https://tonejs.github.io/
    const synth = new Tone.Synth().toDestination();
    // Note is passed into bringTheNoise from each button event listener.
    // -- "8n" means play note for an 8th note.
    synth.triggerAttackRelease(note, "8n");
  }

  // handles all the event listeners for the buttons
  function buttonEvents() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.addEventListener("click", function () {
      console.log("button 1");
      bringTheNoise("C4");
    });
    button2.addEventListener("click", function () {
      console.log("button 2");
      bringTheNoise("C5");
    });
    button3.addEventListener("click", function () {
      console.log("button 3");
      bringTheNoise("C6");
    });
  }
  buttonEvents();
}
main();
