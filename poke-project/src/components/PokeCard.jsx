function PokeCard ({ pokemon }) {

    return (
        <>
        <div className={`card ${pokemon.types[0].type.name}`}>
            <p className="name">{pokemon.name}</p>
            <img className="image" src={pokemon.sprites.front_default} alt="Image not found." />
            <p className="type">{pokemon.types[0].type.name}</p>
        </div>
        </>
    )
}

export default PokeCard