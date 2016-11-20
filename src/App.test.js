import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import App from './App';

test('renders without crashing', t =>{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
