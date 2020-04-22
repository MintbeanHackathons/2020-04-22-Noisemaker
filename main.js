const theremin = document.getElementById("theremin");
const form = document.querySelector(".form");
const maxInput = document.getElementById("max");
const minInput = document.getElementById("min");
const submitBtn = document.getElementById("submit");

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
let oscillator, mousedown, minValue, maxValue;

// Helper functions
const calculateFrequency = (Xpos) => {
	let min = minValue ? minValue : 10, //* this could also be minValue || 10
		max = maxValue ? maxValue : 1000; //* this could also be minValue || 1000
	let innerWidth = window.innerWidth * 0.6;
	return (Xpos / innerWidth) * max + min;
};

const calculateGain = (Ypos) => {
	let min = 0.1,
		max = 2;
	let innerHeight = window.innerHeight * 0.4;
	return 1 - (Ypos / innerHeight) * max + min;
};

const handleSubmit = (evt) => {
	evt.preventDefault();
	minValue = +minInput.value;
	maxValue = +maxInput.value;
	minInput.value = "";
	maxInput.value = "";
};

const stopSound = () => {
	mousedown = false;
	oscillator.stop(audioCtx.currentTime);
	oscillator.disconnect();
};

// Form Event Listeners
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleSubmit);

// Theremin Event Listeners
theremin.addEventListener("mousedown", (evt) => {
	if ((evt.currentTarget = theremin)) {
		mousedown = true;
		oscillator = audioCtx.createOscillator();
		oscillator.frequency.setTargetAtTime(
			calculateFrequency(evt.clientX),
			audioCtx.currentTime,
			0.01
		);
		gainNode.gain.setTargetAtTime(
			calculateGain(evt.clientY),
			audioCtx.currentTime,
			0.01
		);
		oscillator.connect(gainNode);
		gainNode.connect(audioCtx.destination);
		oscillator.start(audioCtx.currentTime);
	}
});

theremin.addEventListener("mousemove", (evt) => {
	if (mousedown && (evt.currentTarget = theremin)) {
		oscillator.frequency.setTargetAtTime(
			calculateFrequency(evt.clientX),
			audioCtx.currentTime,
			0.01
		);
		gainNode.gain.setTargetAtTime(
			calculateGain(evt.clientY),
			audioCtx.currentTime,
			0.01
		);
	}
});

theremin.addEventListener("mouseup", stopSound);

theremin.addEventListener("mouseleave", stopSound);
