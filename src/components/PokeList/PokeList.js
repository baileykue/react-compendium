import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

export default function PokeList({ pokemon, query, type }) {
  const filterPoke = () => {
    return pokemon.filter((poke) => {
      return poke.pokemon.includes(query) && (poke.type_1 === type || type === 'all');
    });
  };
  return (
    <div className="poke-list">
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
