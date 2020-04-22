function main() {
  // correctAnswer and currentAnswer used for game logic
  const correctAnswer = ["button1", "button3", "button2"];
  let currentAnswer = [];
  const gameOutcomeEl = document.getElementById("gameOutcome");

  // handles all the event listeners for the buttons
  function buttonEvents() {
    const button1El = document.getElementById("button1");
    const button2El = document.getElementById("button2");
    const button3El = document.getElementById("button3");

    button1El.addEventListener("click", function () {
      bringTheNoise("C4");
      guessingGame("button1");
    });
    button2El.addEventListener("click", function () {
      bringTheNoise("C5");
      guessingGame("button2");
    });
    button3El.addEventListener("click", function () {
      bringTheNoise("C6");
      guessingGame("button3");
    });
  }
  buttonEvents();

  // Contains all the logic for the mini game
  function guessingGame(button) {
    // checks the users guess
    // -- if correct the answer is added to the currentAnswer array
    // -- if incorrect, the currentAnswer array is set back to an empty array and the user is informed they were wrong
    if (correctAnswer[currentAnswer.length] === button) {
      currentAnswer.push(button);
    } else {
      gameOutcomeEl.innerText = "Woops, Try again.";
      setTimeout(function () {
        gameOutcomeEl.innerText = "Guess the correct pattern and win!";
      }, 1000);
      // clear currentAnswer array
      currentAnswer = [];
    }

    // checks if the user has found the correct pattern
    // -- if correct the user is informed they got it correct.
    // -- currentAnswer array is cleared
    if (currentAnswer.length === 3) {
      gameOutcomeEl.innerText = "YOU DID IT!";
      setTimeout(function () {
        gameOutcomeEl.innerText = "Guess the correct pattern and win!";
      }, 3000);
      currentAnswer = [];
    }
  }

  // Play a sound using Tone.js and its synth instrument
  function bringTheNoise(note) {
    // Tone.js documentation https://tonejs.github.io/
    const synth = new Tone.Synth().toDestination();
    // Note is passed into bringTheNoise from each button event listener.
    // -- "8n" means play note for an 8th note.
    synth.triggerAttackRelease(note, "8n");
  }

  // I want to add different sounds for getting the correct pattern and incorrect pattern. I ran out of time to figure out more of the tone api
  //   function greatSuccess() {
  //     var synth = new Tone.Synth().toDestination();

  //     synth.triggerAttackRelease("C4", 0.5, 0);
  //     synth.triggerAttackRelease("E4", 0.5, 1);
  //     synth.triggerAttackRelease("G4", 0.5, 2);
  //     synth.triggerAttackRelease("B4", 0.5, 3);
  //   }
}
main();
