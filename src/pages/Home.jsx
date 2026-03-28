import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import Noticias from "../components/Noticias"
import MovieCarousel from "../components/MovieCarousel"
import { peliculasHome } from "../data/peliculasData"

function Home({ favoritos, toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <main className="page-home">
      <section className="section-block">
        <h2 className="section-title section-title--accent">🔥 Estrenos Destacados</h2>
        <MovieCarousel
          movies={peliculasHome.slice(0, 3)}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
          onVerDetalle={(pelicula) => navigate(`/pelicula/${pelicula.id}`)}
        />
      </section>

      <section className="section-block">
        <h2 className="section-title">🎬 Películas en Cartelera</h2>
        <div className="peliculas-grid">
          {peliculasHome.map((pelicula) => (
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
      </section>

      <section>
        <Noticias />
      </section>
    </main>
  )
}

export default Home
