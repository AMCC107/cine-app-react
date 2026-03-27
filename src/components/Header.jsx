import { useNavigate, NavLink } from "react-router-dom"
import FavoritesDropdown from "./FavoritesDropdown"

function Header({ favoritos = [], toggleFavorito }) {
  const navigate = useNavigate()

  const navLinkBaseStyle = {
    cursor: "pointer",
    fontFamily: "sans-serif",
    fontSize: "15px",
    padding: "8px 14px",
    borderRadius: "8px",
    transition: "color 0.2s ease, background-color 0.2s ease",
    backgroundColor: "transparent",
    textDecoration: "none"
  }

  const buttonPrimaryStyle = {
    cursor: "pointer",
    backgroundColor: "#FFC107",
    color: "#000",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
    textDecoration: "none"
  }

  return (
    <header
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#0B2B5C",
        borderBottom: "1px solid #1a3a6c",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          maxWidth: "1400px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            margin: 0,
            color: isActive ? "#FEC429" : "#FFFFFF",
            fontFamily: "sans-serif",
            fontSize: "26px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none"
          })}
        >
          🎬 Cinépolis
        </NavLink>

        <nav
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...navLinkBaseStyle,
              color: isActive ? "#FEC429" : "#FFFFFF"
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/cartelera"
            style={({ isActive }) => ({
              ...buttonPrimaryStyle,
              color: isActive ? "#FEC429" : "#000",
              backgroundColor: isActive ? "transparent" : "#FFC107",
              border: isActive ? "2px solid #FEC429" : "none"
            })}
          >
            Cartelera
          </NavLink>
          <NavLink
            to="/alimentos"
            style={({ isActive }) => ({
              ...navLinkBaseStyle,
              color: isActive ? "#FEC429" : "#FFFFFF"
            })}
          >
            Alimentos
          </NavLink>
          <NavLink
            to="/otros"
            style={({ isActive }) => ({
              ...navLinkBaseStyle,
              color: isActive ? "#FEC429" : "#FFFFFF"
            })}
          >
            Servicios
          </NavLink>

          <FavoritesDropdown
            favoritos={favoritos}
            onQuitar={toggleFavorito}
            onVerDetalle={(pelicula) => navigate(`/pelicula/${pelicula.id}`)}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
