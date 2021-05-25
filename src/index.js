import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WetherContextProvider from './contexts/wetherContext';
import LoaderContextProvider from './contexts/LoaderContext';

ReactDOM.render(
  <React.StrictMode>
    <WetherContextProvider>
      <div style={{marginTop: '10vh'}} className='d-flex flex-column align-items-center'>

    <App />
      </div>

    </WetherContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
