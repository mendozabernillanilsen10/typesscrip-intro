import './style.css';

import {
  charmander,
} from './bases/06-decoration92'; // Si lo necesitas para el tipo

// Si lo necesitas para el tipo

// Si lo necesitas para el tipo

// Si lo necesitas para el tipo

// Si lo necesitas para el tipo

const container = document.querySelector('#app')!;

container.innerHTML = `
  <h1>Pokemon</h1>
  <div class="card">
    <h2>${charmander.name}</h2>
    <p>${charmander.id}</p>
    <button id="btn">Click me</button>
  </div>
`;