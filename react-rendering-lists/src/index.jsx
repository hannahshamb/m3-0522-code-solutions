import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon =>
  <li key={pokemon.number}>{pokemon.name}
  </li>
  );
  return <ul>{listItems}</ul>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PokemonList pokedex={pokedex}/>);
