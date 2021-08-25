import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppComp from './components/AppComp';
import reportWebVitals from './reportWebVitals';



function Componente(props){
  console.log(props)
  const titulo = props.titulo;
  return <div className="contenedor">
  <h1>{titulo}</h1>
  <h2>{props.contenido}</h2>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</div>
}


ReactDOM.render(
  <AppComp></AppComp>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
