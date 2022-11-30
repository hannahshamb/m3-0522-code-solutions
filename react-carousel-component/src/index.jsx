import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Carousel urls={[
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  'https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  'https://dextraneous.files.wordpress.com/2019/07/004.png?w=932',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png'
]}/>);
