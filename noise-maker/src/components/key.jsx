import React from 'react';

const Key = ({keyClick, label}) => {
  return(
    <div onClick={keyClick} className="key">
      <div className="label">{label}</div>
    </div>
  )
}

export default Key;
