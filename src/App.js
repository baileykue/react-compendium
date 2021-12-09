import './App.css';
import { useState, useEffect } from 'react';
import Controls from './components/Controls/Controls';
import PokeList from './components/PokeList/PokeList';
import { getPokemon, getTypes } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [types, setTypes] = useState([]);
  const [selectType, setSelecType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order);
      setPokemon(data.results);
      setLoading(false);
    };

    if (loading) {
      fetchData();
    }
  }, [loading, query, order]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            type={type}
            setType={setType}
            order={order}
            setOrder={setOrder}
          />
          <PokeList pokemon={pokemon} query={query} type={type} />
        </>
      )}
    </div>
  );
}

export default App;
