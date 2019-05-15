import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Homepage from './component/homepage/homepage';
import setup from './firebase/setup';

setup();
  
ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
);
