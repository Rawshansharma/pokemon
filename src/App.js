import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pokemoncard from './components/Pokemoncard';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Fetch data from the API
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      // First API call to get the list of Pokemon
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemonList = response.data.results;

      // Fetch details for each Pokemon (like image)
      const detailedPokemon = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );

      setPokemonData(detailedPokemon);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  // Filter the pokemon list based on the search term
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-gray-600 font-semibold">Loading...</div>;
  if (error) return <div className="text-red-500 font-semibold">Error fetching data</div>;

  return (
    <div className="App">  
      {/* Search input */}
      <h1>Pokemon AJLDKASDLA</h1>
       <div className='flex justify-center items-center m-4'>
       <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-64 px-4 py-2 text-sm text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
        </div> 
      
      <Pokemoncard filteredPokemon={filteredPokemon}/>
    </div>
  );
}

export default App;
