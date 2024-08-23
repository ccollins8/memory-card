import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import MainArticle from './components/MainArticle'

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const gameData = {
    score,
    setScore,
    bestScore,
    setBestScore
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <MainArticle {...gameData} />
    </>
  )
}

export default App
