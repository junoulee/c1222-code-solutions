import React, { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }
  if (isOn) {
    return (
      <div className='box'>
        <label className="switch">
          <input onClick={handleClick} type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <h4>ON</h4>
      </div>
    );
  }
  return (
    <div className='box'>
      <label className="switch">
        <input onClick={handleClick} type="checkbox"></input>
        <span className="slider round"></span>
      </label>
      <h4>OFF</h4>
    </div>
  );

}
