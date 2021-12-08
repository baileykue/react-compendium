import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, url_image }) {
  return (
    <div className="poke-card">
      <img src={url_image} />
      <span>{pokemon}</span>
    </div>
  );
}
