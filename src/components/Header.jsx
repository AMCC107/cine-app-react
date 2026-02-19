function Header({ cambiarVista }) {
  const navLinkStyle = {
    cursor: "pointer",
    color: "#FFFFFF",
    fontFamily: "sans-serif",
    fontSize: "15px",
    padding: "6px 12px",
    borderRadius: "8px"
  }
  const buttonPrimaryStyle = {
    cursor: "pointer",
    backgroundColor: "#6495ED",
    color: "#FFFFFF",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    fontSize: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
  }

  return (
    <header
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#0B2B5C"
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
        <h1 style={{ margin: 0, color: "#FFFFFF", fontFamily: "sans-serif", fontSize: "24px" }}>
          Cinépolis
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
            Ir a cartelera
          </button>
          <span style={navLinkStyle} onClick={() => cambiarVista("alimentos")}>
            Alimentos
          </span>
          <span style={navLinkStyle} onClick={() => cambiarVista("otros")}>
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
