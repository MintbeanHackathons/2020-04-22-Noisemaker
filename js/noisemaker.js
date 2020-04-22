const notes = ['c4','d4','e4','f4','g4','a4','b4','c5'];
const sounds = [];

const soundContext = new AudioContext();

function loadSound(filename, buffer, index) {
  const request = new XMLHttpRequest();
  request.open('GET', filename, true);
  request.responseType = 'arraybuffer';

  request.onload = () => {
    soundContext.decodeAudioData(request.response, (newBuffer) => {
      buffer[index] = newBuffer;
      console.log(`${filename} loaded!`, newBuffer)
    });
  };

  request.send();
}

function playSound(idx, options) {
  const sound = sounds[idx];
  const soundVolume = 1;

  if (sound) {
    const source = soundContext.createBufferSource();
    source.buffer = sound;

    const volume = soundContext.createGain();
    volume.gain.value = soundVolume;

    volume.connect(soundContext.destination);
    source.connect(volume);
    source.start(0);
  }
}

for (let i = 0; i < notes.length; ++i) {
  loadSound(`../snd/dog_${notes[i]}.mp3`, sounds, i);
}
