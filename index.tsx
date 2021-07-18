import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import ReactDOM from 'react-dom';
import App from './JamesBrewing';

interface AppProps {}
interface AppState {
  // message: string;
}

render(<App />, document.getElementById('root'));
