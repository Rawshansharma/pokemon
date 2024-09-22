import React from 'react';

const PokemonCard = ({ filteredPokemon }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {filteredPokemon.map((pokemon) => (
        <div
          className="p-5 m-2 text-center w-36 border-2 rounded-md bg-white shadow-md transition-transform transform hover:scale-105"
          key={pokemon.id}
        >
          <div className="relative">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-28 h-28 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg"
            />
          </div>
          <h2 className="mt-2 text-lg font-semibold capitalize">{pokemon.name}</h2>
          <p className="text-sm">Height: {pokemon.height}</p>
          <p className="text-sm">Weight: {pokemon.weight}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
