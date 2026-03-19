import { useState } from "react"
import { useParams } from "react-router-dom"
import { getPeliculaById } from "../data/peliculas"

function Detalle() {
  const { id } = useParams()
  const pelicula = getPeliculaById(id)

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [horario, setHorario] = useState("")
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(null)

  if (!pelicula) {
    return (
      <main
        style={{
          padding: "24px",
          textAlign: "center",
          color: "#FFFFFF",
          fontFamily: "sans-serif"
        }}
      >
        <h2>Película no encontrada</h2>
        <p style={{ color: "#888" }}>No existe una película con ese identificador. Verifica la URL o regresa a la cartelera.</p>
      </main>
    )
  }

  function manejarCompra(e) {
    e.preventDefault()
    setMensajeConfirmacion({
      nombre,
      correo,
      cantidad: cantidadBoletos,
      horario,
      pelicula: pelicula.titulo
    })
    setNombre("")
    setCorreo("")
    setCantidadBoletos(1)
    setHorario("")
  }

  return (
    <main
      style={{
        padding: "24px 16px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "24px",
          marginBottom: "32px"
        }}
      >
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
        />
        <div>
          <h2
            style={{
              margin: "0 0 16px 0",
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: "700"
            }}
          >
            {pelicula.titulo}
          </h2>
          <p
            style={{
              color: "#ccc",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "16px"
            }}
          >
            {pelicula.descripcion || "Una experiencia cinematográfica única."}
          </p>
          {pelicula.rating && (
            <span
              style={{
                display: "inline-block",
                padding: "6px 12px",
                backgroundColor: "#FFC107",
                color: "#000",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "8px"
              }}
            >
              {pelicula.rating}
            </span>
          )}
          {pelicula.duration && (
            <span
              style={{
                display: "inline-block",
                padding: "6px 12px",
                backgroundColor: "#333",
                color: "#FFF",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            >
              {pelicula.duration}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          padding: "24px",
          border: "1px solid #333"
        }}
      >
        <h3
          style={{
            margin: "0 0 20px 0",
            color: "#FFFFFF",
            fontSize: "22px",
            fontWeight: "600"
          }}
        >
          Comprar Boletos
        </h3>

        <form onSubmit={manejarCompra}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "6px",
                  fontWeight: "500"
                }}
              >
                Nombre completo
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                required
                style={{
                  width: "100%",
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
            <div>
              <label
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "6px",
                  fontWeight: "500"
                }}
              >
                Correo electrónico
              </label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="tu@correo.com"
                required
                style={{
                  width: "100%",
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
            <div>
              <label
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "6px",
                  fontWeight: "500"
                }}
              >
                Cantidad de boletos
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={cantidadBoletos}
                onChange={(e) => setCantidadBoletos(e.target.value)}
                required
                style={{
                  width: "100%",
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
            <div>
              <label
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "6px",
                  fontWeight: "500"
                }}
              >
                Selecciona horario
              </label>
              <select
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  cursor: "pointer"
                }}
              >
                <option value="">-- Elige un horario --</option>
                <option value="14:00">14:00 hrs</option>
                <option value="16:30">16:30 hrs</option>
                <option value="19:00">19:00 hrs</option>
                <option value="21:30">21:30 hrs</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              backgroundColor: "#FFC107",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s ease"
            }}
          >
            Confirmar Compra
          </button>
        </form>

        {mensajeConfirmacion && (
          <div
            style={{
              marginTop: "24px",
              padding: "20px",
              backgroundColor: "#1b4332",
              borderRadius: "8px",
              border: "1px solid #40916c"
            }}
          >
            <h4
              style={{
                margin: "0 0 12px 0",
                color: "#95d5b2",
                fontSize: "18px"
              }}
            >
              ¡Compra exitosa!
            </h4>
            <p style={{ margin: 0, color: "#d8f3dc", lineHeight: "1.6" }}>
              Gracias <strong>{mensajeConfirmacion.nombre}</strong>, has comprado{" "}
              <strong>{mensajeConfirmacion.cantidad} boleto(s)</strong> para{" "}
              <strong>{mensajeConfirmacion.pelicula}</strong> en el horario de{" "}
              <strong>{mensajeConfirmacion.horario}</strong>.
              <br />
              Te enviaremos la confirmación a <strong>{mensajeConfirmacion.correo}</strong>.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Detalle
