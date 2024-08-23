import '../styles/Header.css'

import { useState, useEffect } from "react"

function Header({score,bestScore}) {
    

    return (
        <>
            <header>
                <div className="left-section">
                    <h1>Memory Game</h1>
                    <p>Get points by clicking on an image but don't click on any more than once!</p>
                </div>
                <div className="right-section">
                    <h4>Score: {score}</h4>
                    <h4>Best score: {bestScore}</h4>
                </div>
            </header>
        </>
    )

}

export default Header