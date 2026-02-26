import MovieCard from "../components/MovieCard"

function Cartelera({ verDetalle, favoritos, toggleFavorito }) {
  const peliculasCartelera = [
    {
      id: 101,
      titulo: "Shingeki No Kyojin: The Final Season",
      imagen: "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
      descripcion: "La batalla final por la humanidad ha comenzado. Eren y sus amigos enfrentan su destino.",
      rating: "B15",
      duration: "145 min"
    },
    {
      id: 102,
      titulo: "Bob Esponja: Al Rescate",
      imagen: "https://image.tmdb.org/t/p/w500/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
      descripcion: "Bob Esponja y Patricio viven una nueva aventura submarina para salvar a Gary.",
      rating: "A",
      duration: "96 min"
    },
    {
      id: 103,
      titulo: "Oppenheimer",
      imagen: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      descripcion: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
      rating: "B15",
      duration: "180 min"
    },
    {
      id: 104,
      titulo: "Inside Out 2",
      imagen: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      descripcion: "Riley entra en la adolescencia y nuevas emociones llegan a su mente.",
      rating: "A",
      duration: "96 min"
    },
    {
      id: 105,
      titulo: "Deadpool & Wolverine",
      imagen: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      descripcion: "Deadpool y Wolverine unen fuerzas en una aventura multiversal llena de acción y humor.",
      rating: "B15",
      duration: "127 min"
    },
    {
      id: 106,
      titulo: "Moana 2",
      imagen: "https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
      descripcion: "Moana emprende un nuevo viaje hacia mares desconocidos junto a una tripulación inesperada.",
      rating: "A",
      duration: "100 min"
    }
  ]

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
            onVerDetalle={() => verDetalle(pelicula)}
          />
        ))}
      </div>
    </main>
  )
}

export default Cartelera