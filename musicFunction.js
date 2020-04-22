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
	//play sound
	sound(id);
	
}

function sound(x){
	const synth = new Tone.Synth().toMaster();
	var num = x.slice(9);
	num = parseInt(num);
	//play different notes randomly based on number of flower
	if(num % 2 == 0){
		synth.triggerAttackRelease("C3", "8n");
	}
	else if(num % 3 == 0){
		synth.triggerAttackRelease("C5", "8n");
	}
	else if(num % 4 == 0){
		synth.triggerAttackRelease("B3", "8n");
	}
	else if(num % 5 == 0){
		synth.triggerAttackRelease("D3", "8n");
	}
	else if(num % 6 == 0){
		synth.triggerAttackRelease("B5", "8n");
	}
	else if(num % 7 == 0){
		synth.triggerAttackRelease("D5", "8n");
	}
	else if(num % 8 == 0){
		synth.triggerAttackRelease("E5", "8n");
	}
	else if(num % 9 == 0){
		synth.triggerAttackRelease("E3", "8n");
	}
	else{
		synth.triggerAttackRelease("C4", "8n");
	}
	
}