export const peliculasHome = [
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

export const peliculasCartelera = [
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

export const todasLasPeliculas = [...peliculasHome, ...peliculasCartelera]

export function getPeliculaById(id) {
  const numId = Number(id)
  if (Number.isNaN(numId)) return null
  return todasLasPeliculas.find((p) => p.id === numId) ?? null
}
