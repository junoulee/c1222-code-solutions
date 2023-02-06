import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToggleSwitch } from './toggle-switch';

const element = (
  <ToggleSwitch />
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
