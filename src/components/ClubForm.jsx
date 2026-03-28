import { useState } from "react"

function ClubForm() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [submittedData, setSubmittedData] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedData({ nombre, correo })
    setNombre("")
    setCorreo("")
  }

  return (
    <section
      style={{
        gridColumn: "1 / -1",
        fontFamily: "sans-serif"
      }}
    >
      <h3
        style={{
          color: "#FFFFFF",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "16px"
        }}
      >
        Únete al Club Cinépolis
      </h3>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "24px"
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="club-nombre"
            style={{
              display: "block",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "8px"
            }}
          >
            Nombre
          </label>
          <input
            id="club-nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
            style={{
              width: "100%",
              maxWidth: "350px",
              padding: "12px",
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "#FFFFFF",
              fontSize: "15px",
              boxSizing: "border-box"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="club-correo"
            style={{
              display: "block",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "8px"
            }}
          >
            Correo electrónico
          </label>
          <input
            id="club-correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tu@correo.com"
            required
            style={{
              width: "100%",
              maxWidth: "350px",
              padding: "12px",
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "#FFFFFF",
              fontSize: "15px",
              boxSizing: "border-box"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#FFC107",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Suscribirme
        </button>
      </form>

      {submittedData && (
        <div
          style={{
            marginTop: "16px",
            padding: "16px 20px",
            backgroundColor: "#1b4332",
            border: "1px solid #40916c",
            borderRadius: "8px"
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#d8f3dc",
              fontSize: "15px",
              lineHeight: "1.5"
            }}
          >
            ¡Suscripción exitosa! Gracias <strong>{submittedData.nombre}</strong>,
            te enviaremos promociones exclusivas a <strong>{submittedData.correo}</strong>.
          </p>
        </div>
      )}
    </section>
  )
}

export default ClubForm
