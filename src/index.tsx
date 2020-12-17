import * as React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from 'react-query-devtools'
import Appbar from './components/appbar';
import Router from './components/router';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <>
      <div className="flex flex-col overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        <Appbar/>
        <Router />
      </div>
      <ReactQueryDevtools />
    </>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
