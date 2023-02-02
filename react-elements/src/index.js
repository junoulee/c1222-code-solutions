import React from 'react';
import * as ReactDOM from 'react-dom';

const create = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const container = document.querySelector('#root');
ReactDOM.createRoot(container).render(create);
