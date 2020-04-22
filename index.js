document.querySelector('button').addEventListener('click', async () => {
  const button = document.getElementById('boom');
  button.style.height = '150px';
  button.style.width = '200px';

	await Tone.start()
  //create a synth and connect it to the master output (your speakers)
  var synth = new Tone.Synth().toMaster()

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease('C4', '8n')
})

document.querySelector('button').addEventListener('mouseout', async () => {
  const button = document.getElementById('boom');
  button.style.height = '100px';
  button.style.width = '150px';
});