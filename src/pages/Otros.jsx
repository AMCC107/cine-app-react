// Tarjetas: Promociones, Membresías, Preventas (Guía: bordes 8px, sombras, #333 texto)
const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "24px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  fontFamily: "sans-serif"
}
const cardTitleStyle = {
  color: "#0B2B5C",
  marginTop: 0,
  marginBottom: "12px",
  fontSize: "20px",
  fontWeight: "600"
}
const cardTextStyle = {
  color: "#333333",
  lineHeight: "1.6",
  margin: 0,
  fontSize: "15px"
}

function Otros() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px 16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px"
      }}
    >
      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Promociones</h2>
        <p style={cardTextStyle}>
          Descubre nuestras promociones especiales y combos exclusivos para disfrutar del mejor entretenimiento.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Membresías</h2>
        <p style={cardTextStyle}>
          Únete al Club Cinépolis y obtén beneficios exclusivos, descuentos y puntos por cada compra.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitleStyle}>Preventas</h2>
        <p style={cardTextStyle}>
          Asegura tus boletos con anticipación para los estrenos más esperados del año.
        </p>
      </div>
    </main>
  )
}

export default Otros
