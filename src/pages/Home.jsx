import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import Noticias from "../components/Noticias"
import MovieCarousel from "../components/MovieCarousel"
import { peliculasHome } from "../data/peliculas"

function Home({ favoritos, toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px 24px",
        fontFamily: "sans-serif"
      }}
    >
      {/* NUEVA SECCIÓN: Carrusel de Estrenos */}
      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "24px",
            borderBottom: "2px solid #FEC429", // Acento de Cinépolis
            paddingBottom: "8px"
          }}
        >
          🔥 Estrenos Destacados
        </h2>
        
        {/* Carrusel de estrenos: solo las primeras 3 películas + props para favoritos y navegación */}
        <MovieCarousel
          movies={peliculasHome.slice(0, 3)}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
          onVerDetalle={(pelicula) => navigate(`/pelicula/${pelicula.id}`)}
        /> 
      </section>

      {/* Sección de Películas en Cartelera (Tu grid original) */}
      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "24px"
          }}
        >
          🎬 Películas en Cartelera
        </h2>

        {/* Grid de películas: 3 columnas por defecto */}
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
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`, { state: { pelicula } })}
            />
          ))}
        </div>
      </section>

      {/* Sección de Noticias */}
      <section>
        <Noticias />
      </section>

      {/* Estilos responsivos para el grid */}
      <style>{`
        .peliculas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .peliculas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .peliculas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}

export default Home
