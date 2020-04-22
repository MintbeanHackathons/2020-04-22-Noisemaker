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
	var num = x.slice(9);
	num = parseInt(num);

	if(num % 2 == 0){
		synth.triggerAttackRelease("C3", "8n");
	}
	else if(num % 3 == 0){
		synth.triggerAttackRelease("C5", "8n");
	}
	else{
		synth.triggerAttackRelease("C4", "8n");
	}
	
}