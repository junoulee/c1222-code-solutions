import React, { useState } from 'react';

export function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const [pauseID, setPauseID] = useState(null);

  function startTimer() {
    if (!play) {

      const count = setInterval(() => {
        setPlay(true);
        setPauseID(count);
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    playPause(pauseID);
  }

  function playPause() {
    clearInterval(pauseID);
    setPlay(!play);
  }

  function controlButton() {
    if (play) {
      return 'fa-solid fa-pause pause';
    }
    return 'fa-solid fa-play play';
  }
  function resetEverything() {
    if (!play) {
      clearInterval(setSeconds(0));
    }
  }

  return (
    <div className="circles">
      <h3 onClick={resetEverything}>{seconds}</h3>
      <i onClick={() => {
        startTimer();
        playPause();
      }} className={controlButton()}></i>
    </div>
  );
}
