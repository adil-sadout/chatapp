import React from 'react';
import ReactDOM from 'react-dom';
import {AppContProv} from "./helpers/context";
import './style/css/main.css';
import "./index.css"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <AppContProv>
      <App />
    </AppContProv>
  </React.StrictMode>,
  document.getElementById('root')
);


