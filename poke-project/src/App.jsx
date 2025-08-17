import { useState, useEffect } from 'react'
import PokeGallery from './components/PokeGallery'
import PokeNav from './components/PokeNav'


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
    .then(res => res.json())
    .then(data => 
      Promise.all(data.results.map(p => fetch(p.url).then(r => r.json())))
    )
    .then(details => setPokemons(details));

  }, []);

  return (
    <>
      <PokeGallery pokemons={pokemons} />
      <PokeNav />
    </>
  )
}

export default App
