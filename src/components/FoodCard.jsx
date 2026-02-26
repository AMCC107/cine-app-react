import { useState } from "react"

function FoodCard({ title, image, precio, onAgregar }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#1e1e1e",
        fontFamily: "sans-serif",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.15)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "100%",
          height: "160px",
          overflow: "hidden",
          backgroundColor: "#2a2a2a"
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
      </div>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <h3 style={{ color: "#FFFFFF", margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>
          {title}
        </h3>
        {precio && (
          <span style={{ color: "#FFC107", fontSize: "18px", fontWeight: "700" }}>
            {precio}
          </span>
        )}
        {onAgregar && (
          <button
            type="button"
            onClick={onAgregar}
            style={{
              marginTop: "12px",
              padding: "8px 16px",
              backgroundColor: "#FFC107",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%"
            }}
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  )
}

export default FoodCard
