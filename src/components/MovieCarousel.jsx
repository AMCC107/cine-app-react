import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies, favoritos = [], toggleFavorito, onVerDetalle }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={10}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            title={movie.titulo}
            image={movie.imagen}
            descripcion={movie.descripcion}
            rating={movie.rating}
            duration={movie.duration}
            esFavorito={favoritos.some((fav) => fav.id === movie.id)}
            onToggleFavorito={() => toggleFavorito(movie)}
            onVerDetalle={() => onVerDetalle(movie)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieCarousel