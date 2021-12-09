import React from 'react';
import './Controls.css';
import { Button, TextField, Select, MenuItem } from '@mui/material';

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
      <TextField
        id="outlined-basic"
        label="Search Pokemon"
        variant="outlined"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <span>Sort: </span>
      <Select
        variant="outlined"
        value={order}
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <MenuItem value="asc">Ascedning</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>

      <span>Type:</span>
      <Select
        variant="outlined"
        value={selectType}
        onChange={(e) => {
          setSelectType(e.target.value);
        }}
      >
        <MenuItem value="all">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>

      <Button variant="outlined" size="large" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
