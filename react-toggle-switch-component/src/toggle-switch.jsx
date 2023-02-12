import React, { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }

  function setText() {
    if (isOn) {
      return 'ON';
    }
    return 'OFF';
  }
  return (
    <div className='box'>
      <label className="switch">
        <input onClick={handleClick} type="checkbox"></input>
        <span className="slider round"></span>
      </label>
      <h4>{setText()}</h4>
    </div>
  );
}
