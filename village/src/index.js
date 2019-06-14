import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

const smurfApplication = <Router><App /></Router>
const rootElement = document.getElementById('root');

render(smurfApplication,rootElement);
