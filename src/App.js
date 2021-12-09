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
  const [selectType, setSelectType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage, selectType);
      setPokemon(data.results);
      setLoading(false);
    };

    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage, selectType]);

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
            types={types}
            selectType={selectType}
            setSelectType={setSelectType}
            order={order}
            setOrder={setOrder}
          />
          <PokeList
            pokemon={pokemon}
            setCurrentPage={setCurrentPage}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
}

export default App;
