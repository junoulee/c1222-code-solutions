import React, { useState } from 'react';

export function HotButton({ text }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  function setClassName() {
    if (clicks < 3) {
      return 'black';
    }
    if (clicks >= 3 && clicks < 6) {
      return 'purple';
    }
    if (clicks >= 6 && clicks < 9) {
      return 'light-purple';
    }
    if (clicks >= 9 && clicks < 12) {
      return 'orange';
    }
    if (clicks >= 12 && clicks < 15) {
      return 'peach';
    }
    if (clicks >= 15 && clicks < 18) {
      return 'yellow';
    }
    if (clicks >= 18) {
      return 'white';
    }
  }

  return <button onClick={handleClick} className={setClassName()}>{text}</button>;
}
