import { useState } from "react"
import Header from "./components/Header"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  const [vistaActual, setVistaActual] = useState("home")
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
  const [favoritos, setFavoritos] = useState([])

  function toggleFavorito(pelicula) {
    setFavoritos((prev) => {
      const existe = prev.some((fav) => fav.id === pelicula.id)
      if (existe) {
        return prev.filter((fav) => fav.id !== pelicula.id)
      } else {
        return [...prev, pelicula]
      }
    })
  }

  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212" }}>
      <Header
        cambiarVista={setVistaActual}
        favoritos={favoritos}
        toggleFavorito={toggleFavorito}
        verDetalle={verDetalle}
      />

      {vistaActual === "home" && (
        <Home
          verDetalle={verDetalle}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera
          verDetalle={verDetalle}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}

      {vistaActual === "alimentos" && <Alimentos />}
      {vistaActual === "otros" && <Otros />}
    </div>
  )
}

export default App