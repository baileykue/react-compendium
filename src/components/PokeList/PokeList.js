import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

export default function PokeList({ pokemon }) {
  return (
    <div className="poke-list">
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
