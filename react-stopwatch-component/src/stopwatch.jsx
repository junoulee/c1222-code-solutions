import React, { useState } from 'react';

export function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);

  function startTimer() {
    if (!play) {
      setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    if (play) {
      clearInterval(setSeconds(0));
    }
  }

  function playPause() {
    setPlay(!play);
  }
  function controlButton() {
    if (play) {
      return 'fa-solid fa-pause pause';
    }
    return 'fa-solid fa-play play';
  }
  // console.log(play);
  return (
    <div className="circles">
      <h3 onClick={startTimer}>{seconds}</h3>
      <i onClick={() => {
        startTimer();
        playPause();
      }} className={controlButton()}></i>
    </div>
  );
}
