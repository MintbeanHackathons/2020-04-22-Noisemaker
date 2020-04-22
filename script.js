let playingState = [false, false, false];

var synth = new Tone.MembraneSynth().toMaster();

//create a loop
// var loop = new Tone.Loop(function (time) {
//   synth.triggerAttackRelease('C1', '8n', time);
// }, '4n');
// loop.start(0).stop('20000m');

// var loop2 = new Tone.Loop(function (time) {
//   synth.triggerAttackRelease('C2', '8n', time);
// }, '4n');

// //play the loop between 0-2m on the transport
// loop2.start(0).stop('20000m');

//attach a click listener to a play button
document.querySelector('#first').addEventListener('click', async () => {
  var loop = new Tone.Loop(function (time) {
    synth.triggerAttackRelease('C1', '8n', time);
  }, '4n');
  loop.start(0).stop('20000m');
  //   loop.Transport.toggle();
  Tone.Transport.toggle();
  //   if (playingState[0] === false) {
  //     // Tone.Transport.start();
  //     // playingState[0] = true;
  //   } else {
  //     // Tone.Transport.stop();
  //     // playingState[0] = false;
  //   }

  //   setTimeout(() => {
  //     Tone.Transport.stop();
  //   }, 5000);
});

//attach a click listener to a play button
document.querySelector('#second').addEventListener('click', async () => {
  //   loop2.Transport.toggle();
  var loop2 = new Tone.Loop(function (time) {
    synth.triggerAttackRelease('C2', '8n', time);
  }, '4n');

  //play the loop between 0-2m on the transport
  loop2.start(0).stop('20000m');
  Tone.Transport.toggle();
  //   if (playingState[0] === false) {
  //     // Tone.Transport.start();
  //     // playingState[0] = true;
  //   } else {
  //     // Tone.Transport.stop();
  //     // playingState[0] = false;
  //   }
  //   setTimeout(() => {
  //     Tone.Transport.stop();
  //   }, 5000);
});
