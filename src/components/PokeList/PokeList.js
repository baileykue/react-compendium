import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

export default function PokeList({ pokemon, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  };

  return (
    <>
      <div className="poke-list">
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>

      <div>
        <button onClick={handlePrevPage}>Prev Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </>
  );
}
