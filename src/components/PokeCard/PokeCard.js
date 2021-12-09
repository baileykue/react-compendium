import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, url_image, hp, attack, defense }) {
  return (
    <div className="poke-card">
      <img src={url_image} />
      <h3>{pokemon}</h3>
      <span>HP: {hp}</span>
      <span>Attack: {attack}</span>
      <span>Defense: {defense}</span>
    </div>
  );
}
