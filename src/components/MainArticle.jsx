import { useState, useEffect } from 'react';
import Card from './Card'
import '../styles/MainArticle.css'

function MainArticle() {
  
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      let pokemonData = []
      const pokemonNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle', 'eevee', 'jigglypuff'];
      for (const poke of pokemonNames) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`, {mode: 'cors'});
        const data = await response.json();
        pokemonData.push({name: data.name, image: data.sprites.front_default})
        console.log(poke)
      }
      setPokemon(pokemonData)
    }
    fetchPokemon()
  }, [])

  function handleCardClick() {
    const shuffledPokemon = [...pokemon].sort(() => Math.random() - 0.5);
    setPokemon(shuffledPokemon)
  }
    
  return (
    <>
      <div id="card-grid">
        {pokemon.map((poke) => (
          <Card key={poke.name} poke={poke} onClick={handleCardClick} /> // Send the entire poke object
        ))}
      </div>
    </>
  );
  

}

export default MainArticle;