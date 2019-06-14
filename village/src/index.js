import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
const smurfApplication = <Router><App /></Router>
const rootElement = document.getElementById('root');

render(smurfApplication,rootElement);
