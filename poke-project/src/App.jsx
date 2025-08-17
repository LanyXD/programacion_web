import { useState, useEffect } from 'react'
import axios from "axios"
import PokeGallery from './components/PokeGallery'
import PokeNav from './components/PokeNav'


function App() {
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=6")
        const details = await Promise.all(
          res.data.results.map(p => axios.get(p.url).then(r => r.data))
        )
        setPokemons(details)
      } catch (error) {
        console.error("Error cargando Pokémon:", error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <PokeGallery pokemons={pokemons} />
      <PokeNav />
    </>
  )
}

export default App
