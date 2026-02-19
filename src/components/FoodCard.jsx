// Tarjeta de alimento reutilizable (Guía Figma: bordes 8px, sombras, texto #333)
import Button from "./Button"

function FoodCard({ title, image, onAgregar }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        backgroundColor: "#FFFFFF",
        fontFamily: "sans-serif"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />
      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3 style={{ color: "#333333", margin: "8px 0", fontSize: "16px", fontWeight: "600" }}>
          {title}
        </h3>
        {onAgregar && (
          <Button text="Agregar" onClick={onAgregar} />
        )}
      </div>
    </div>
  )
}

export default FoodCard
