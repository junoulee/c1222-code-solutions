import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function CustomButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  if (isClicked) {
    return <button onClick={handleClick}>{props.text} Wow! </button>;
  }
  return <button onClick={handleClick}>{props.text}</button>;

}

const element = (
  <div>
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
