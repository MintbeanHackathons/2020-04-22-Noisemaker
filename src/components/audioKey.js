import React from 'react';

function audioKey(props) {
  return (
    <div>
      <audio id={`audio${props.keyTrigger}`} data-colour={props.colour}>
        <source type="audio/wav" src={`audio/${props.filename}`}/>
      </audio>
    </div>
  )
}

export default audioKey;
