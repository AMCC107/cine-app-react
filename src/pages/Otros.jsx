import ClubForm from "../components/ClubForm"
import { promociones, membresias, preventas } from "../data/otrosData"

function Otros() {
  return (
    <main className="page-wide">
      <h2 className="page-hero-title">
        <span>🎁</span> Servicios y Promociones
      </h2>
      <p className="page-hero-sub">Aprovecha nuestras promociones y beneficios exclusivos</p>

      <section className="section-spacing">
        <h3 className="section-heading">
          <span>🔥</span> Promociones Activas
        </h3>
        <div className="grid-auto-promo">
          {promociones.map((promo) => (
            <div key={promo.id} className="promo-card">
              <div className="promo-accent" style={{ backgroundColor: promo.color }} />
              <div className="promo-card-inner">
                <span className="promo-emoji">{promo.emoji}</span>
                <div>
                  <h4>{promo.titulo}</h4>
                  <p>{promo.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h3 className="section-heading section-heading--white">
          <span>💳</span> Membresías
        </h3>
        <div className="grid-auto-memb">
          {membresias.map((membresia) => (
            <div key={membresia.id} className="memb-card">
              <div className="memb-head">
                <span>{membresia.emoji}</span>
                <h4>{membresia.titulo}</h4>
              </div>
              <p>{membresia.descripcion}</p>
              <ul className="memb-list">
                {membresia.beneficios.map((beneficio, idx) => (
                  <li key={idx}>{beneficio}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h3 className="section-heading section-heading--white">
          <span>🎬</span> Preventas Disponibles
        </h3>
        <div className="grid-auto-prev">
          {preventas.map((preventa) => (
            <div key={preventa.id} className="prev-card">
              <span>{preventa.emoji}</span>
              <div>
                <h4>{preventa.titulo}</h4>
                <span className="prev-fecha">{preventa.fecha}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClubForm />
    </main>
  )
}

export default Otros
