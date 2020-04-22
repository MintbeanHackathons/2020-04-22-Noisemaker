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

audioElement.addEventListener('ended', () => { // listens for song ending
  playButton.dataset.playing = 'false'
}, false)

// represents how big sound wave is
const gainNode = audioContext.createGain() 

// connects everything to gainNode
track.connect(gainNode).connect(audioContext.destination)

// grabs input value
const volumeControl = document.querySelector('#volume')

// listens for input change
volumeControl.addEventListener('input', function() {
  gainNode.gain.value = this.value
}, false)

// creates a panning node to adjust volume of left and right speakers
const pannerOptions = { pan: 0 }
const panner = new StereoPannerNode(audioContext, pannerOptions)

// grabs input value
const pannerControl = document.querySelector('#panner')

// listens for input change
pannerControl.addEventListener('input', function() {
  panner.pan.value = this.value
}, false)

// connects panner to everything
track.connect(gainNode).connect(panner).connect(audioContext.destination)

