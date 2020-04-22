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

for (let i = 0; i < 7; ++i) {
  loadSound(`../snd/xylophone${i+1}.mp3`, sounds, i);
}
