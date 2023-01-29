import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp'; /* 
import { HelloWorldApp } from "./HelloWorld"; */
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='Goku' /> */}
    <CounterApp value={5} />
    {/* <FirstApp title='¡Hola!, soy Goku!' /> */}
  </React.StrictMode>
);
