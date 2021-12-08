import React from 'react';
import PokeCard from '../PokeCard/PokeCard';

export default function PokeList({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
