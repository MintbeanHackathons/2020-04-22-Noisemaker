import React, {useEffect, useState} from 'react';
import './App.css';
import AudioKey from './components/audioKey'
import BackgroundSounds from './components/BackgroundSounds'

const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

const colours = [];

for(let i = 0; i < 26; i++){
  colours.push(`rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`)
}

const glassAudioFiles = [
  "A501.wav",
  "A503.wav",
  "A505.wav",
  "A507.wav",
  "As4-B401.wav",
  "As4-B403.wav",
  "As4-B405.wav",
  "As502.wav",
  "As504.wav",
  "As506.wav",
  "B401.wav",
  "B403.wav",
  "B405.wav",
  "A502.wav",
  "A504.wav",
  "A506.wav",
  "A508.wav",
  "As4-B402.wav",
  "As4-B404.wav",
  "As501.wav",
  "As503.wav",
  "As505.wav",
  "As507.wav",
  "B402.wav",
  "B404.wav",
  "B406.wav",

  // "E601.wav",
  // "F504.wav",
  // "F605.wav",
  // "Fs506.wav",
  // "G508.wav",
  // "Gs509.wav",
  // "A503.wav",
  // "As4-B405.wav",
  // "B403.wav",
  // "B507.wav",
  // "C603.wav",
  // "Cs505.wav",
  // "Cs608.wav",
  // "D603.wav",
  // "Ds505.wav",
  // "E501.wav",
  // "E602.wav",
  // "F505.wav",
  // "F606.wav",
  // "Fs507.wav",
  // "G509.wav",
  // "A504.wav",
  // "As501.wav",
  // "B404.wav",
  // "B508.wav",
  // "C604.wav",
  // "Cs506.wav",
  // "D501.wav",
  // "D604.wav",
  // "Ds506.wav",
  // "E502.wav",
  // "E603.wav",
  // "F506.wav",
  // "F607.wav",
  // "Fs508.wav",
  // "Gs501.wav",
  // "A505.wav",
  // "As502.wav",
  // "B405.wav",
  // "C501.wav",
  // "C605.wav",
  // "Cs507.wav",
  // "D502.wav",
  // "D605.wav",
  // "  Ds601.wav",
  // " E503.wav",
  // "  E604.wav",
  // " F507.wav",
  // " F608.wav",
  // "  G501.wav",
  // "  Gs502.wav",
  // "A506.wav",
  // "     As503.wav",
  // "    B406.wav",
  // " C502.wav",
  // " C606.wav",
  // "  Cs601.wav",
  // " D503.wav",
  // "  D606.wav",
  // "  Ds602.wav",
  // " E504.wav",
  // "  E605.wav",
  // " F508.wav",
  // " F609.wav",
  // "  G502.wav",
  // "  Gs503.wav",
  // "A507.wav",
  // "     As504.wav",
  // "    B501.wav",
  // " C503.wav",
  // " C607.wav",
  // "  Cs602.wav",
  // " D504.wav",
  // "  D607.wav",
  // "  Ds603.wav",
  // " E505.wav",
  // "  E606.wav",
  // " F509.wav",
  // " Fs501.wav",
  // " G503.wav",
  // "  Gs504.wav",
  // "A508.wav",
  // "     As505.wav",
  // "    B502.wav",
  // " C504.wav",
  // " C608.wav",
  // "  Cs603.wav",
  // " D505.wav",
  // "  D608.wav",
  // "  Ds604.wav",
  // " E506.wav",
  // "  E607.wav",
  // " F601.wav",
  // " Fs502.wav",
  // " G504.wav",
  // "  Gs505.wav",
  // "As4-B401.wav",
  // " As506.wav",
  // "    B503.wav",
  // " C505.wav",
  // " Cs501.wav",
  // " Cs604.wav",
  // " D506.wav",
  // "  Ds501.wav",
  // " Ds605.wav",
  // " E507.wav",
  // "  F501.wav",
  // " F602.wav",
  // " Fs503.wav",
  // " G505.wav",
  // "  Gs506.wav",
  // "As4-B402.wav",
  // " As507.wav",
  // "    B504.wav",
  // " C506.wav",
  // " Cs502.wav",
  // " Cs605.wav",
  // " D507.wav",
  // "  Ds502.wav",
  // " Ds606.wav",
  // " E508.wav",
  // "  F502.wav",
  // " F603.wav",
  // " Fs504.wav",
  // " G506.wav",
  // "  Gs507.wav",
]

const pianoAudioFiles = [
  '203459__tesabob2001__a-5.mp3',
  '203481__tesabob2001__c-4.mp3',                 
  '203460__tesabob2001__a-4.mp3',         
  '203482__tesabob2001__d-4.mp3',          
  '203482__tesabob2001__d-4.mp3',          
  '203483__tesabob2001__d-3.mp3',                    
  '203462__tesabob2001__b4.mp3',          
  '203484__tesabob2001__c6.mp3' ,                   
  '203463__tesabob2001__b3.mp3',          
  '203485__tesabob2001__c5.mp3' ,                   
  '203464__tesabob2001__a5.mp3',          
  '203486__tesabob2001__d3.mp3' ,                   
  '203465__tesabob2001__a4.mp3',          
  '203487__tesabob2001__d-5.mp3',                                 
  '203469__tesabob2001__f4.mp3',          
  '203491__tesabob2001__g-4.mp3',                    
  '203470__tesabob2001__e3.mp3',          
  '203492__tesabob2001__g4.mp3' ,                   
  '203471__tesabob2001__e4.mp3',          
  '203493__tesabob2001__g3.mp3' ,                   
  '203472__tesabob2001__d4.mp3',           
  '203472__tesabob2001__d4.mp3',           
  '203473__tesabob2001__d5.mp3',          
  '203495__tesabob2001__g5.mp3 ',                    
  '203474__tesabob2001__f-4.mp3',         
   '203499__tesabob2001__f-5.mp3'  
]

const backgroundSounds = [
 {filename: 'Mystical-loop-118-bpm.wav', name: 'Lost in Space'},
  {filename: 'Ambient-synth-loop-120-bpm.wav', name: 'Melancholy'},
  {filename: 'Deep-fat-bass-126-bpm.wav', name: 'The Bass'}, 
]

function App() {
  useEffect(() => {
    document.addEventListener('keypress', function(event){
      const audio = document.getElementById(`audio${event.key}`);
      if(!audio){
        return;
      }
      //replay from start if already playing
      if(audio.paused){
        audio.play();
      } else {
        audio.currentTime = 0;
        audio.play();
      }
      document.getElementById('the-circle-of-sounds').style.backgroundColor = audio.getAttribute('data-colour')
    });
  }, []);

  return (
    <div className="App">
      <h1>Type to begin. Press buttons below for background musics</h1>
      <div id="background-sounds-container">
        {backgroundSounds.map((filename,i) => <BackgroundSounds filename={filename.filename} name={filename.name}/>)}
      </div>
      {glassAudioFiles.map((filename,i) => <AudioKey filename={filename} key={i} keyTrigger={keys[i]} colour={colours[i]}/>)}
      <div id="the-circle-of-sounds"></div>
    </div>
  );
}

export default App;
