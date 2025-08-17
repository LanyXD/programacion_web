function PokeGallery ({ pokemons }) {
    return (
        <div className="gallery">
            {pokemons.map(pokemon => (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="imagene pokmeon" />
                </div>
            ))}
        </div>
    )
}

export default PokeGallery