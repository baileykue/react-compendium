import './App.css';
import { useState, useEffect } from 'react';
import Controls from './components/Controls/Controls';
import PokeList from './components/PokeList/PokeList';
import { getPokemon } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');

  useEffect(() => {
    let timer;

    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);

      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading, query]);

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
          />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
