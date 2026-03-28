import { useState } from "react"
import { useParams } from "react-router-dom"
import { getPeliculaById } from "../data/peliculasData"

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
      <main className="detalle-not-found">
        <h2>Película no encontrada</h2>
        <p>No existe una película con ese identificador. Verifica la URL o regresa a la cartelera.</p>
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
    <main className="detalle-main">
      <div className="detalle-hero">
        <img src={pelicula.imagen} alt={pelicula.titulo} className="detalle-poster" />
        <div>
          <h2 className="detalle-title">{pelicula.titulo}</h2>
          <p className="detalle-desc">{pelicula.descripcion || "Una experiencia cinematográfica única."}</p>
          {pelicula.rating && <span className="badge-rating">{pelicula.rating}</span>}
          {pelicula.duration && <span className="badge-duration">{pelicula.duration}</span>}
        </div>
      </div>

      <div className="detalle-compra-box">
        <h3>Comprar Boletos</h3>
        <form onSubmit={manejarCompra}>
          <div className="form-grid-2">
            <div>
              <label className="form-label" htmlFor="detalle-nombre">
                Nombre completo
              </label>
              <input
                id="detalle-nombre"
                className="form-input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="detalle-correo">
                Correo electrónico
              </label>
              <input
                id="detalle-correo"
                className="form-input"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="tu@correo.com"
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="detalle-cantidad">
                Cantidad de boletos
              </label>
              <input
                id="detalle-cantidad"
                className="form-input"
                type="number"
                min="1"
                max="10"
                value={cantidadBoletos}
                onChange={(e) => setCantidadBoletos(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="detalle-horario">
                Selecciona horario
              </label>
              <select
                id="detalle-horario"
                className="form-select"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              >
                <option value="">-- Elige un horario --</option>
                <option value="14:00">14:00 hrs</option>
                <option value="16:30">16:30 hrs</option>
                <option value="19:00">19:00 hrs</option>
                <option value="21:30">21:30 hrs</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-comprar">
            Confirmar Compra
          </button>
        </form>

        {mensajeConfirmacion && (
          <div className="alert-compra-ok">
            <h4>¡Compra exitosa!</h4>
            <p>
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
