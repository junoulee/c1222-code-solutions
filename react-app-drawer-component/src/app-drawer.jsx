import React, { useState } from 'react';

export function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <img src="https://m.media-amazon.com/images/I/71Wu+ZcUsqL._AC_UF894,1000_QL80_.jpg" alt="" />
      {!isOpen && <BurgerIcon onClick={handleClick} />}
      <div className={isOpen ? 'menu' : 'hidden'}>
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
      {isOpen && <Overlay onClick={handleClick} />}
    </>
  );

}

function BurgerIcon({ isOpen, onClick }) {
  const className = 'fa-solid fa-bars burger';
  return <i onClick={onClick} className={className} />;
}

function Overlay({ isOpen, onClick }) {
  const className = 'overlay';
  return <div className={className} onClick={onClick}></div>;
}
