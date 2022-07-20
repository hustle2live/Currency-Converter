import React from 'react';
import ReactDOM from 'react-dom';

import { updateCourse, drawSelectOptions } from './State';
import App from './App';

import './index.css';

export let RenderEntireTree = (props) => {
  ReactDOM.render(
    <App state={props} getCourse={updateCourse} />,
    document.getElementById('root')
  );
};

RenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
