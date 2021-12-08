import React from 'react';

export default function PokeCard({ pokemon, url_image }) {
  return (
    <div>
      <img src={url_image} />
      <span>{pokemon}</span>
    </div>
  );
}
