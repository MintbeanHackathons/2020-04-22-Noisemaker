function main() {
  const correctAnswer = ["button1", "button3", "button2"];
  let currentAnswer = [];
  const gameOutcomeEl = document.getElementById("gameOutcome");
  // handles all the event listeners for the buttons
  function buttonEvents() {
    const button1El = document.getElementById("button1");
    const button2El = document.getElementById("button2");
    const button3El = document.getElementById("button3");

    button1El.addEventListener("click", function () {
      console.log("button 1");
      bringTheNoise("C4");
      guessingGame("button1");
    });
    button2El.addEventListener("click", function () {
      console.log("button 2");
      bringTheNoise("C5");
      guessingGame("button2");
    });
    button3El.addEventListener("click", function () {
      console.log("button 3");
      bringTheNoise("C6");
      guessingGame("button3");
    });
  }
  buttonEvents();

  // Contains all the logic for the mini game
  function guessingGame(button) {
    // if (currentAnswer.length < 3) {
    //   currentAnswer.push(button);
    // }
    if (correctAnswer[currentAnswer.length] === button) {
      currentAnswer.push(button);
    } else {
      gameOutcomeEl.innerText = "Woops, Try again.";
      setTimeout(function () {
        gameOutcomeEl.innerText = "Guess the correct pattern and win!";
      }, 1000);
      console.log("incorrect pattern");
      currentAnswer = [];
    }

    if (currentAnswer.length === 3) {
      gameOutcomeEl.innerText = "YOU DID IT!";
      setTimeout(function () {
        gameOutcomeEl.innerText = "Guess the correct pattern and win!";
      }, 3000);
      console.log("YOU DID IT!");
      greatSuccess();
      currentAnswer = [];
    }
    console.log(currentAnswer);
  }

  // Play a sound using Tone.js and its synth instrument
  function bringTheNoise(note) {
    // Tone.js documentation https://tonejs.github.io/
    const synth = new Tone.Synth().toDestination();
    // Note is passed into bringTheNoise from each button event listener.
    // -- "8n" means play note for an 8th note.
    synth.triggerAttackRelease(note, "8n");
  }

  //   function greatSuccess() {
  //     var synth = new Tone.MembraneSynth().toMaster();

  //     //create a loop
  //     var loop = new Tone.Loop(function (time) {
  //       synth.triggerAttackRelease("C1", "8n", time);
  //     }, "4n");

  //     //play the loop between 0-2m on the transport
  //     loop.start(0).stop("2m");
  //   }
}
main();
