// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);
audioElement.volume = 0.1;

//connect track to destination
track.connect(audioCtx.destination);

audioElement.addEventListener('timeupdate', (event) => {
  console.log(event);
  let currentTime = event.srcElement.currentTime;
  let duration = event.srcElement.duration;
  let percentageComplete = (currentTime / duration) * 100;
  document.getElementById('lyrics').style.top = -percentageComplete * 3 + 'vh';
});
