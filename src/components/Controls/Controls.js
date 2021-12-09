import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  types,
  selectType,
  setSelectType,
  order,
  setOrder,
}) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <label>
        Sort:
        <select
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="asc">Ascedning</option>
          <option value="dsc">Descending</option>
        </select>
      </label>

      <label>
        Type:
        <select
          value={selectType}
          onChange={(e) => {
            setSelectType(e.target.value);
          }}
        >
          <option value="all">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
