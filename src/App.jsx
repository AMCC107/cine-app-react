import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import ContactoVista from "./pages/ContactoVista"
import TerminosCondiciones from "./pages/TerminosCondiciones"

function App() {
  const [favoritos, setFavoritos] = useState([])

  function toggleFavorito(pelicula) {
    setFavoritos((prev) => {
      const existe = prev.some((fav) => fav.id === pelicula.id)
      if (existe) {
        return prev.filter((fav) => fav.id !== pelicula.id)
      }
      return [...prev, pelicula]
    })
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212" }}>
      <Header
        favoritos={favoritos}
        toggleFavorito={toggleFavorito}
      />

      <Routes>
        <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="/cartelera" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/contacto" element={<ContactoVista />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
