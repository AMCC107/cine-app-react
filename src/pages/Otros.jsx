import ClubForm from "../components/ClubForm"

const promociones = [
  {
    id: 1,
    titulo: "2x1 en Martes",
    descripcion: "Todos los martes, lleva 2 boletos por el precio de 1. Válido para todas las funciones.",
    emoji: "🎟️",
    color: "#e53935"
  },
  {
    id: 2,
    titulo: "Miércoles de Palomitas",
    descripcion: "Palomitas grandes al precio de medianas todos los miércoles.",
    emoji: "🍿",
    color: "#FB8C00"
  },
  {
    id: 3,
    titulo: "Combo Cumpleañero",
    descripcion: "En tu cumpleaños recibe un combo gratis presentando tu INE.",
    emoji: "🎂",
    color: "#8E24AA"
  }
]

const membresias = [
  {
    id: 1,
    titulo: "Club Cinépolis",
    descripcion: "Acumula puntos con cada compra y canjéalos por boletos, combos y más.",
    emoji: "⭐",
    beneficios: ["1 punto por cada $10", "Boleto gratis al acumular 150 puntos", "Descuentos exclusivos"]
  },
  {
    id: 2,
    titulo: "Cinépolis VIP",
    descripcion: "La experiencia premium con asientos reclinables y servicio a tu lugar.",
    emoji: "👑",
    beneficios: ["Acceso a salas exclusivas", "Menú gourmet", "Servicio personalizado"]
  }
]

const preventas = [
  { id: 1, titulo: "Avengers: Secret Wars", fecha: "Próximamente 2026", emoji: "🦸" },
  { id: 2, titulo: "Spider-Man: Beyond", fecha: "Marzo 2026", emoji: "🕷️" },
  { id: 3, titulo: "Avatar 4", fecha: "Diciembre 2026", emoji: "🌿" }
]

function Otros() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px 16px",
        fontFamily: "sans-serif"
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <span>🎁</span> Servicios y Promociones
      </h2>
      <p style={{ color: "#888", fontSize: "16px", marginBottom: "32px" }}>
        Aprovecha nuestras promociones y beneficios exclusivos
      </p>

      {/* Promociones */}
      <section style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: "#FFC107",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span>🔥</span> Promociones Activas
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}
        >
          {promociones.map((promo) => (
            <div
              key={promo.id}
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "24px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  backgroundColor: promo.color
                }}
              />
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "40px" }}>{promo.emoji}</span>
                <div>
                  <h4 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0" }}>
                    {promo.titulo}
                  </h4>
                  <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                    {promo.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membresías */}
      <section style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: "#FFFFFF",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span>💳</span> Membresías
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px"
          }}
        >
          {membresias.map((membresia) => (
            <div
              key={membresia.id}
              style={{
                backgroundColor: "#1e1e1e",
                border: "2px solid #FFC107",
                borderRadius: "12px",
                padding: "24px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "36px" }}>{membresia.emoji}</span>
                <h4 style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "600", margin: 0 }}>
                  {membresia.titulo}
                </h4>
              </div>
              <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.5", marginBottom: "16px" }}>
                {membresia.descripcion}
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {membresia.beneficios.map((beneficio, idx) => (
                  <li key={idx} style={{ color: "#ccc", fontSize: "13px", marginBottom: "6px" }}>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Preventas */}
      <section style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: "#FFFFFF",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span>🎬</span> Preventas Disponibles
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px"
          }}
        >
          {preventas.map((preventa) => (
            <div
              key={preventa.id}
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}
            >
              <span style={{ fontSize: "36px" }}>{preventa.emoji}</span>
              <div>
                <h4 style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "600", margin: "0 0 4px 0" }}>
                  {preventa.titulo}
                </h4>
                <span style={{ color: "#FFC107", fontSize: "13px", fontWeight: "500" }}>
                  {preventa.fecha}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de suscripción */}
      <ClubForm />
    </main>
  )
}

export default Otros
