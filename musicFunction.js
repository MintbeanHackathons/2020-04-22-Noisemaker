var original;
var i = 0;

window.onload = function() {
original = document.getElementById('container');

};

function playSound(id){
	//duplicate 
	var clone = original.cloneNode(true); // clone
	clone.id = "container" + ++i; // there can only be one element with an ID
	original.parentNode.appendChild(clone);
	
	sound(id);
	
}

function sound(x){
	const synth = new Tone.Synth().toMaster();
	
	if(x == "container"){
		synth.triggerAttackRelease("C4", "8n");
	}
	
	if(x == "container1"){
		synth.triggerAttackRelease("C5", "8n");
	}
	if(x == "container2"){
		synth.triggerAttackRelease("C5", "8n");
	}
	
}