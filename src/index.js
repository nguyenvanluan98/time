import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function time (){
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date. getUTCDate();
  
  let hour = date.getUTCHours() +7;
  let minute = date.getMinutes();
  let second = date.getUTCSeconds();
  
  let elemet = (
    
  <h1> {hour}:{minute}:{second} - {day}/ {month}/{year}</h1>
    
  )
  ReactDOM.render(elemet, document.getElementById('root'))
}
setInterval(time,1000)
// ReactDOM.render(
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>,
//   document.getElementById('root')
// );
// // setInterval(tick, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
