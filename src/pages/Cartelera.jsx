import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { peliculasCartelera } from "../data/peliculasData"

function Cartelera({ favoritos, toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <main
      style={{
        padding: "24px",
        fontFamily: "sans-serif"
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "24px",
          marginTop: 0
        }}
      >
        🎬 Cartelera Completa
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px"
        }}
      >
        {peliculasCartelera.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            descripcion={pelicula.descripcion}
            rating={pelicula.rating}
            duration={pelicula.duration}
            esFavorito={favoritos.some((fav) => fav.id === pelicula.id)}
            onToggleFavorito={() => toggleFavorito(pelicula)}
            onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
          />
        ))}
      </div>
    </main>
  )
}

export default Cartelera