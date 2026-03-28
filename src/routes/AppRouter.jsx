import React, { Suspense, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = React.lazy(() => import("../pages/Home"))
const Cartelera = React.lazy(() => import("../pages/Cartelera"))
const Detalle = React.lazy(() => import("../pages/Detalle"))
const Alimentos = React.lazy(() => import("../pages/Alimentos"))
const Otros = React.lazy(() => import("../pages/Otros"))
const ContactoVista = React.lazy(() => import("../pages/ContactoVista"))
const TerminosCondiciones = React.lazy(() => import("../pages/TerminosCondiciones"))
const NotFound = React.lazy(() => import("../pages/NotFound"))

function AppRouter() {
  const [favoritos, setFavoritos] = useState([])

  function toggleFavorito(pelicula) {
    setFavoritos((prev) => {
      const existe = prev.some((fav) => fav.id === pelicula.id)
      if (existe) {
        return prev.filter((fav) => fav.id !== pelicula.id)
      }
      return [...prev, pelicula]
    })
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header favoritos={favoritos} toggleFavorito={toggleFavorito} />

        <Suspense fallback={<p className="route-loading">Cargando vista...</p>}>
          <Routes>
            <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
            <Route
              path="/cartelera"
              element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />}
            />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/pelicula/:id" element={<Detalle />} />
            <Route path="/contacto" element={<ContactoVista />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
