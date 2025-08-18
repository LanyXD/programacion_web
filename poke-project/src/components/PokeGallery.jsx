import PokeCard from "./PokeCard"


function PokeGallery ({ pokemons }) {
    return (
        <>
        <div className="gallery">
            {pokemons.map(pokemon => (
                <PokeCard pokemon={pokemon} />
            ))}
        </div>
        </>
    )
}

export default PokeGallery