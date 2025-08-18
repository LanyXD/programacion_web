import { useState, useEffect } from 'react'
import axios from "axios"
import PokeGallery from './components/PokeGallery'
import PokeNav from './components/PokeNav'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 6

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
        const details = await Promise.all(
          res.data.results.map(p => axios.get(p.url).then(r => r.data))
        )
        setAllPokemons(details)
      } catch (error) {
        console.error("Error cargando Pokémon:", error)
      }
    }

    fetchPokemons()
  }, [])

  const pagedPokemons = allPokemons.slice(currentPage * pageSize, (currentPage + 1) * pageSize)

  const nextPage = () => {
    if ((currentPage + 1) * pageSize < allPokemons.length) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <>
      <PokeGallery pokemons={pagedPokemons} />
      <PokeNav next={nextPage} prev={prevPage}/>
    </>
  )
}

export default App
