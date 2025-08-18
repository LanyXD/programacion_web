function PokeCard ({ pokemon }) {

    return (
        <>
        <div className="card">
            <p className="name">{pokemon.name}</p>
            <img className="image" src={pokemon.sprites.front_default} alt="Image not found." />
            <p className="type">{pokemon.type}</p>
        </div>
        </>
    )
}

export default PokeCard