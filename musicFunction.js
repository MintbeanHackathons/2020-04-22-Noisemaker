var original;
var i = 0;
window.onload = function() {
original = document.getElementById('container');

};

function playSound(){
	const synth = new Tone.Synth().toMaster();

	//play a middle 'C' for the duration of an 8th note
	synth.triggerAttackRelease("C4", "8n");
	if(original){
		
		var clone = original.cloneNode(true); // "deep" clone
		clone.id = "container" + ++i; // there can only be one element with an ID
		original.parentNode.appendChild(clone);
	}
}