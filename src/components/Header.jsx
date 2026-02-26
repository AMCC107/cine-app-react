import FavoritesDropdown from "./FavoritesDropdown"

function Header({ cambiarVista, favoritos = [], toggleFavorito, verDetalle }) {
  const navLinkStyle = {
    cursor: "pointer",
    color: "#FFFFFF",
    fontFamily: "sans-serif",
    fontSize: "15px",
    padding: "8px 14px",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "transparent"
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
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
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
        <h1
          style={{
            margin: 0,
            color: "#FFFFFF",
            fontFamily: "sans-serif",
            fontSize: "26px",
            fontWeight: "700",
            cursor: "pointer"
          }}
          onClick={() => cambiarVista("home")}
        >
          🎬 Cinépolis
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <span style={navLinkStyle} onClick={() => cambiarVista("home")}>
            Inicio
          </span>
          <button
            type="button"
            style={buttonPrimaryStyle}
            onClick={() => cambiarVista("cartelera")}
          >
            Cartelera
          </button>
          <span style={navLinkStyle} onClick={() => cambiarVista("alimentos")}>
            Alimentos
          </span>
          <span style={navLinkStyle} onClick={() => cambiarVista("otros")}>
            Servicios
          </span>

          {/* Dropdown de favoritos */}
          <FavoritesDropdown
            favoritos={favoritos}
            onQuitar={toggleFavorito}
            onVerDetalle={verDetalle}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
