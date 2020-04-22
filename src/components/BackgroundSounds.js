import React, {useState} from 'react';
import './backgroundSounds.css'

function BackgroundSounds(props) {
  const [playing, setPlaying] = useState(false)
  const play = () => {
    if(!playing){
      document.getElementById(props.filename).play();
      setPlaying(true);
    } else {
      document.getElementById(props.filename).pause();
      document.getElementById(props.filename).currentTime = 0;
      setPlaying(false);
    }
  }
  return (
    <div>
      <button onClick={play} id={`${props.filename}-btn`} className={playing ? 'selected' : ''}>{props.name}</button>
      <audio id={props.filename} loop>
        <source type="audio/wav" src={`background-audio/${props.filename}`}/>
      </audio>
    </div>
  )
}

export default BackgroundSounds;