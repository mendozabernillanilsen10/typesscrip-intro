import './style.css';

import {
  Pokemon,
  pokemons,
} from './bases/03-clases';

// tu archivo con la lista

async function renderPokemon(pokemon: Pokemon): Promise<string> {
  const moves = await pokemon.getMoves();
  const moveNames = moves.slice(0, 5).map(m => m.move.name).join(', ');

  return `
    <li>
      <h3>${pokemon.name}</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
      <p><strong>Tipo:</strong> ${pokemon.type}</p>
      <p><strong>Nivel:</strong> ${pokemon.level}</p>
      <p><strong>Vida:</strong> ${pokemon.hp}</p>
      <p><strong>Ataque:</strong> ${pokemon.attack}</p>
      <p><strong>Defensa:</strong> ${pokemon.defense}</p>
      <p><strong>Velocidad:</strong> ${pokemon.speed}</p>
      <p><strong>Estado:</strong> ${pokemon.status}</p>
      <p><strong>Movimientos:</strong> ${moveNames}</p>
    </li>
  `;
}

async function renderApp() {
  const itemsHTML = await Promise.all(pokemons.map(renderPokemon));

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <h1>Pokémon</h1>
      <ul>
        ${itemsHTML.join('')}
      </ul>
    </div>
  `;
}

renderApp();
