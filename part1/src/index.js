import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from 'react';


const notes = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }
]

const Part3 = ({name}) => {
  const [contadorValue, updateContador] = useState(0);

  /* Helper Function => Extraer funciones para manejar eventos
  Ejecuta la funcion del onClick => por fuera del botón.
  (Sin necesidad de ejecutarla con () directamente) */

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }

  const handleClickReset = () => {
    updateContador(0)
  }

  // Renderizado Condicional Si es par o Impar con Ternarias
  const isEven = contadorValue % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return <div>
    <h1>{name} : {contadorValue}</h1>
    <button
      onClick={handleClick}
/*       onClick={() => {
      updateContador(contadorValue + 1)}
      } */
      >
      Aumentar
    </button>
    <button
    onClick={handleClickReset}
    >
      Reset
    </button>
    <p>{mensajePar}</p>
  </div> 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App notes={notes}/>
    <Part3 name="Count" colorPrimary='red'/>
  </React.StrictMode>
);
