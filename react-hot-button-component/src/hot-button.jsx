import React, { useState } from 'react';

export function HotButton({ text }) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  if (index < 3) {
    return <button onClick={handleClick} className="black">{text}</button>;
  }
  if (index >= 3 && index < 6) {
    return <button onClick={handleClick} className="purple">{text}</button>;
  }
  if (index >= 6 && index < 9) {
    return <button onClick={handleClick} className="light-purple">{text}</button>;
  }
  if (index >= 9 && index < 12) {
    return <button onClick={handleClick} className="orange">{text}</button>;
  }
  if (index >= 12 && index < 15) {
    return <button onClick={handleClick} className="peach">{text}</button>;
  }
  if (index >= 15 && index < 18) {
    return <button onClick={handleClick} className="yellow">{text}</button>;
  }
  if (index >= 18) {
    return <button onClick={handleClick} className="white">{text}</button>;
  }
}
