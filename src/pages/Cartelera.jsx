import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { peliculasCartelera } from "../data/peliculasData"

function Cartelera({ favoritos, toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <main className="page-cartelera">
      <h2 className="cartelera-title">🎬 Cartelera Completa</h2>
      <div className="grid-cartelera">
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
