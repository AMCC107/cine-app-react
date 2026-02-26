import MovieCard from "../components/MovieCard"
import Noticias from "../components/Noticias"

const peliculasData = [
  {
    id: 1,
    titulo: "Avatar: Fuego y Cenizas",
    imagen: "https://images.justwatch.com/poster/336228225/s718/avatar-3.jpg",
    descripcion: "Una nueva aventura en el universo de Pandora donde los Na'vi enfrentan nuevas amenazas.",
    rating: "B15",
    duration: "192 min"
  },
  {
    id: 2,
    titulo: "Wicked",
    imagen: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
    descripcion: "La historia de las brujas de Oz antes de la llegada de Dorothy.",
    rating: "B",
    duration: "160 min"
  },
  {
    id: 3,
    titulo: "Venom: El Último Baile",
    imagen: "https://m.media-amazon.com/images/M/MV5BMjg1M2RjOTItZDMwNi00ZjFlLThjNWEtZjdjNzY4M2VjNTAyXkEyXkFqcGc@._V1_.jpg",
    descripcion: "Eddie y Venom están en fuga mientras son perseguidos por sus mundos.",
    rating: "B15",
    duration: "109 min"
  },
  {
    id: 4,
    titulo: "Dune: Parte Dos",
    imagen: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    descripcion: "Paul Atreides se une a los Fremen en una guerra contra los Harkonnen.",
    rating: "B",
    duration: "166 min"
  },
  {
    id: 5,
    titulo: "Kung Fu Panda 4",
    imagen: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    descripcion: "Po debe entrenar a un nuevo Guerrero Dragón mientras enfrenta una nueva amenaza mágica.",
    rating: "A",
    duration: "94 min"
  },
  {
    id: 6,
    titulo: "Godzilla x Kong",
    imagen: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    descripcion: "Los dos titanes se unen para enfrentar una amenaza colosal oculta en el mundo.",
    rating: "B",
    duration: "115 min"
  }
]

function Home({ verDetalle, favoritos, toggleFavorito }) {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px 24px",
        fontFamily: "sans-serif"
      }}
    >
      {/* Sección de Películas en Cartelera */}
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
          {peliculasData.map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.titulo}
              image={pelicula.imagen}
              descripcion={pelicula.descripcion}
              rating={pelicula.rating}
              duration={pelicula.duration}
              esFavorito={favoritos.some((fav) => fav.id === pelicula.id)}
              onToggleFavorito={() => toggleFavorito(pelicula)}
              onVerDetalle={() => verDetalle(pelicula)}
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