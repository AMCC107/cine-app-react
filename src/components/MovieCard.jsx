import { useState } from "react"

function MovieCard({
  title,
  image,
  descripcion,
  onVerDetalle,
  rating = "B",
  duration = "120 min",
  esFavorito = false,
  onToggleFavorito
}) {
  // Estado local para mostrar/ocultar la descripción
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 8px 24px rgba(0,0,0,0.4)"
          : "0 4px 12px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        fontFamily: "sans-serif"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del poster */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
        />

        {/* Badges superpuestos */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            display: "flex",
            gap: "8px"
          }}
        >
          <span
            style={{
              padding: "4px 10px",
              backgroundColor: "#FFC107",
              color: "#000",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "700"
            }}
          >
            {rating}
          </span>
          <span
            style={{
              padding: "4px 10px",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "#FFF",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "500"
            }}
          >
            {duration}
          </span>
        </div>

        {/* Botón de favorito en esquina superior derecha */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorito && onToggleFavorito()
          }}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(255,255,255,0.9)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            transition: "transform 0.2s ease"
          }}
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {esFavorito ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Contenido de la tarjeta */}
      <div style={{ padding: "16px" }}>
        {/* Título */}
        <h3
          style={{
            margin: "0 0 12px 0",
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "1.3"
          }}
        >
          {title}
        </h3>

        {/* Botones de acción */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
          {/* Botón mostrar/ocultar descripción */}
          <button
            type="button"
            onClick={() => setMostrarDescripcion((prev) => !prev)}
            style={{
              padding: "8px 14px",
              backgroundColor: mostrarDescripcion ? "#6495ED" : "#333",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "500",
              transition: "background-color 0.2s ease"
            }}
          >
            {mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
          </button>

          {/* Botón ver detalle */}
          {onVerDetalle && (
            <button
              type="button"
              onClick={onVerDetalle}
              style={{
                padding: "8px 14px",
                backgroundColor: "#FFC107",
                color: "#000",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600",
                transition: "background-color 0.2s ease"
              }}
            >
              Comprar boletos
            </button>
          )}
        </div>

        {/* Descripción (mostrar/ocultar con animación) */}
        <div
          style={{
            maxHeight: mostrarDescripcion ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease"
          }}
        >
          <p
            style={{
              margin: 0,
              padding: "12px",
              backgroundColor: "#2a2a2a",
              borderRadius: "6px",
              color: "#ccc",
              fontSize: "14px",
              lineHeight: "1.5"
            }}
          >
            {descripcion || "Sin descripción disponible."}
          </p>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
