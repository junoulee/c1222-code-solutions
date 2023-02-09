import React, { useState } from 'react';

export function Accordion(array) {
  const [expand, setExpand] = useState(null);

  const toggle = (i) => {
    if (expand === i) {
      return setExpand(null);
    }
    setExpand(i);
    console.log(i);
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
              <div key={item.number} className='hidden'>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

}

// const languages = array.map((items) => {
//   return (
//     <>
//       <li key={items.number}>{items.topic}</li>
//       <li key={items.number}>{items.text}</li>
//     </>
//   );
// });
// return <ul>{languages}</ul>;
