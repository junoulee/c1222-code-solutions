import React, { useState } from 'react';

export function AppDrawer() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <>
      <img src="https://m.media-amazon.com/images/I/71Wu+ZcUsqL._AC_UF894,1000_QL80_.jpg" alt="" />
      <i className={clicked ? 'hidden' : 'fa-solid fa-bars burger' }
        onClick={handleClick}></i>
      <div className={clicked ? 'menu' : 'hidden'}>
        <h3>Menu</h3>
        <div className='links'>
          <a onClick={handleClick}>About</a>
        </div>
        <div className='links'>
          <a onClick={handleClick}>Get Started</a>
        </div>
        <div className='links'>
          <a onClick={handleClick}>Sign In</a>
        </div>
      </div>
      <div className={!clicked ? 'hidden' : 'overlay' }
        onClick={handleClick} >
      </div>

    </>
  );
}
