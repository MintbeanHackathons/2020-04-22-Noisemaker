// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);

window.onload = function () {
  this.document.getElementById('kokomo').play();
};

track.connect(audioCtx.destination);
