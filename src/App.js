import './App.css';
import { useState, useEffect } from 'react';
import Controls from './components/Controls/Controls';
import PokeList from './components/PokeList/PokeList';
import { getPokemon } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [type, setType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, type);
      setPokemon(data.results);
      setLoading(false);
    };

    if (loading) {
      fetchData();
    }
  }, [loading, query, order, type]);

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
