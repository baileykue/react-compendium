import React from 'react';

export default function Controls({ query, setQuery, setLoading, type, setType, order, setOrder }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>

      <select
        value={order}
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option value="asc">Ascedning</option>
        <option value="dsc">Descending</option>
      </select>

      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="bug">Bug</option>
        <option value="electric">Electric</option>
        <option value="fire">Fire</option>
        <option value="grass">Grass</option>
        <option value="normal">Normal</option>
        <option value="rock">Rock</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="flying">Flying</option>
        <option value="ground">Ground</option>
        <option value="poison">Poison</option>
        <option value="steel">Steel</option>
        <option value="dragon">Dragon</option>
        <option value="fighting">Fighting</option>
        <option value="ghost">Ghost</option>
        <option value="ice">Ice</option>
        <option value="psychic">Psychic</option>
        <option value="water">Water</option>
      </select>
    </div>
  );
}
