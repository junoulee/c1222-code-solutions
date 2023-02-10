import React, { useState } from 'react';

export function Accordion({ array }) {
  const [expand, setExpand] = useState(null);
  const toggle = (i) => {
    if (expand === i) {
      return setExpand(null);
    }
    setExpand(i);
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {array.map((item, i) => {
          return (
            <div key={item.number} className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2 key={item.number}>{item.topic}</h2>
              </div>
              <div key={item.number} className={(expand === i) ? 'content' : 'hidden'}>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

}
