import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="page-not-found">
      <p className="page-not-found__code" aria-hidden="true">
        404
      </p>
      <h1 className="page-not-found__title">Página no encontrada</h1>
      <p className="page-not-found__text">
        La dirección que buscas no existe o fue movida. Revisa la URL o vuelve al inicio.
      </p>
      <Link className="page-not-found__link" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound
