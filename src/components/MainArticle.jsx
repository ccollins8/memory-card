import { useState, useEffect } from 'react';
import Card from './Card'
import '../styles/MainArticle.css'

function MainArticle(props) {

  const {score, setScore, bestScore, setBestScore} = props
  
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([])

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

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  function handleCardClick(poke) {


    if (!clickedPokemon.includes(poke.name)) {
      setClickedPokemon([...clickedPokemon, poke.name]); // Update state
      setScore((prevScore) => prevScore + 1)
    } else {
      setScore(0)
      setClickedPokemon([])
    }
    


    // handle card shuflle
    const shuffledPokemon = [...pokemon].sort(() => Math.random() - 0.5);
    setPokemon(shuffledPokemon)
  }
    
  return (
    <>
      <div id="card-grid">
        {pokemon.map((poke) => (
          // <Card key={poke.name} poke={poke} onClick={handleCardClick} /> // Send the entire poke object
          <Card key={poke.name} poke={poke} onClick={() => handleCardClick(poke)} />

        ))}
      </div>
    </>
  );
  

}

export default MainArticle;