import { useState, useEffect, useRef } from "react"

function FavoritesDropdown({ favoritos, onQuitar, onVerDetalle }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      {/* Botón del corazón */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 16px",
          backgroundColor: favoritos.length > 0 ? "#e53935" : "#333",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "24px",
          fontSize: "15px",
          fontFamily: "sans-serif",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: isOpen ? "0 4px 12px rgba(0,0,0,0.3)" : "none"
        }}
      >
        <span style={{ fontSize: "18px" }}>❤️</span>
        <span>Favoritos ({favoritos.length})</span>
        <span
          style={{
            fontSize: "12px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.2s ease"
          }}
        >
          ▼
        </span>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            minWidth: "300px",
            maxWidth: "350px",
            backgroundColor: "#1e1e1e",
            border: "1px solid #333",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 1000,
            overflow: "hidden",
            animation: "fadeIn 0.2s ease"
          }}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Header del dropdown */}
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #333",
              backgroundColor: "#252525"
            }}
          >
            <h4
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              Mis Películas Favoritas
            </h4>
          </div>

          {/* Lista de favoritos */}
          <div
            style={{
              maxHeight: "320px",
              overflowY: "auto"
            }}
          >
            {favoritos.length === 0 ? (
              <div
                style={{
                  padding: "32px 16px",
                  textAlign: "center"
                }}
              >
                <span style={{ fontSize: "40px", display: "block", marginBottom: "12px" }}>
                  🎬
                </span>
                <p
                  style={{
                    margin: 0,
                    color: "#888",
                    fontSize: "14px",
                    fontFamily: "sans-serif"
                  }}
                >
                  No tienes favoritos aún.
                  <br />
                  <span style={{ fontSize: "13px", color: "#666" }}>
                    Haz clic en el corazón de una película para agregarla.
                  </span>
                </p>
              </div>
            ) : (
              favoritos.map((pelicula) => (
                <div
                  key={pelicula.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderBottom: "1px solid #2a2a2a",
                    transition: "background-color 0.2s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2a2a2a"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                  onClick={() => {
                    if (onVerDetalle) {
                      onVerDetalle(pelicula)
                      setIsOpen(false)
                    }
                  }}
                >
                  {/* Imagen miniatura */}
                  <img
                    src={pelicula.imagen}
                    alt={pelicula.titulo}
                    style={{
                      width: "50px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      flexShrink: 0
                    }}
                  />

                  {/* Info de la película */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h5
                      style={{
                        margin: "0 0 4px 0",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "sans-serif",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {pelicula.titulo}
                    </h5>
                    {pelicula.rating && (
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          backgroundColor: "#FFC107",
                          color: "#000",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: "600"
                        }}
                      >
                        {pelicula.rating}
                      </span>
                    )}
                  </div>

                  {/* Botón quitar */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onQuitar(pelicula)
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: "#333",
                      color: "#ff6b6b",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      flexShrink: 0,
                      transition: "background-color 0.2s ease"
                    }}
                    title="Quitar de favoritos"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer del dropdown */}
          {favoritos.length > 0 && (
            <div
              style={{
                padding: "12px 16px",
                borderTop: "1px solid #333",
                backgroundColor: "#252525",
                textAlign: "center"
              }}
            >
              <span
                style={{
                  color: "#888",
                  fontSize: "12px",
                  fontFamily: "sans-serif"
                }}
              >
                {favoritos.length} película{favoritos.length !== 1 ? "s" : ""} en tu lista
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default FavoritesDropdown
