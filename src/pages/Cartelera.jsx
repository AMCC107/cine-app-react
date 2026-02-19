import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
        rating="B"
        duration="120 min"
      />

      <MovieCard
        title="Bob Esponja: Al Rescate"
        image="https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc0Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
        rating="A"
        duration="95 min"
      />

      <MovieCard
        title="Dune: Parte Dos"
        image="https://m.media-amazon.com/images/M/MV5BNzBiMTQ0YjMtZDRhMC00ZDU4LTk3MDMtNWQxOGMwMjQzYjc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
        rating="B15"
        duration="166 min"
      />

      <MovieCard
        title="Deadpool & Wolverine"
        image="https://lumiere-a.akamaihd.net/v1/images/p_deadpool_wolverine_snuggle_gen_v2_c251bde1.png"
        onVerDetalle={() => cambiarVista("detalle")}
        rating="C"
        duration="149 min"
      />
    </main>
  )
}

// Exportamos la vista
export default Cartelera