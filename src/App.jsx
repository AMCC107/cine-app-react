// Hook de React para manejar estado
import { useState } from "react"

// Componentes
import Header from "./components/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  return (
    // Contenedor raíz de la aplicación
    <div style={{ minHeight: "100vh", backgroundColor: "#0B2B5C", fontFamily: "sans-serif" }}>
      {/* Header puede cambiar la vista */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === "detalle" && <Detalle />}
      {vistaActual === "alimentos" && <Alimentos />}
      {vistaActual === "otros" && <Otros />}
    </div>
  )
}

// Exportamos App
export default App