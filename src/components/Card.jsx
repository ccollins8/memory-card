function Card({poke}) {
    
    return (
        <>
            <div className="card"> {/* Add a unique key for each card */}
              <img src={poke.image} alt={poke.name} />
              <h3>{poke.name}</h3>
            </div>
        </>
    )

}

export default Card