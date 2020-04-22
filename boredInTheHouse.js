//creates instance of audio context
const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()

//gets audio element
const audioElement = document.querySelector('audio')

// passes audio element into the audio context
const track = audioContext.createMediaElementSource(audioElement)

// connects element to contect destination
track.connect(audioContext.destination)

// creates play button
const playButton = document.querySelector('button')

playButton.addEventListener('click', function() { // allows play and pause
  if(audioContext.state === 'suspended') {
    audioContext.resume()
  }
  if(this.dataset.playing === 'false') {
    audioElement.play()
    this.dataset.playing = 'true'
  } else if(this.dataset.playing === 'true') {
    audioElement.pause()
    this.dataset.playing === 'false'
  }
}, false)





