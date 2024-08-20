function Card({poke, onClick}) {
    
    return (
        <>
            <div className="card" onClick={onClick}> {/* Add a unique key for each card */}
              <img src={poke.image} alt={poke.name} />
              <h3>{poke.name}</h3>
            </div>
        </>
    )

}

export default Card