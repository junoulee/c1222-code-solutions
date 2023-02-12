import React, { useState } from 'react';

export function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const [pauseID, setPauseID] = useState(null);

  function startTimer() {
    if (!play) {
      const count = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setPlay(true);
      setPauseID(count);
    }
    clearInterval(pauseID);
  }

  function playPause() {
    setPlay(!play);
  }

  function reset() {
    if (!play) {
      clearInterval(setSeconds(0));
    }
  }

  return (
    <div className="circles">
      <h3 onClick={reset}>{seconds}</h3>
      <Button play={play} onClick= {() => { startTimer(); playPause(); }} />
    </div>
  );
}

function Button({ onClick, play }) {
  const className = play ? 'fa-solid fa-pause pause' : 'fa-solid fa-play play';
  return (
    <i onClick={onClick} className={className}></i>
  );
}
