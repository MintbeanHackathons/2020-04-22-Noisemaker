function main() {
  const synth = new Tone.Synth().toDestination();

  //   function bringTheNoise() {
  //     const synth = new Tone.Synth().toDestination();
  //     synth.triggerAttackRelease("C4", "8n");
  //   }

  function buttonEvents() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.addEventListener("click", function () {
      console.log("button 1");
      synth.triggerAttackRelease("C4", "8n");
    });
    button2.addEventListener("click", function () {
      console.log("button 2");
      synth.triggerAttackRelease("C5", "8n");
    });
    button3.addEventListener("click", function () {
      console.log("button 3");
      synth.triggerAttackRelease("C6", "8n");
    });
  }
  buttonEvents();
}
main();
