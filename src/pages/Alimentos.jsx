import FoodCard from "../components/FoodCard"
import { bebidas, comestibles, snacks, combos } from "../data/alimentosData"

function Alimentos() {
  return (
    <main className="page-wide">
      <h2 className="page-hero-title">
        <span>🍿</span> Alimentos y Bebidas
      </h2>
      <p className="page-hero-sub">Disfruta de nuestro menú mientras ves tu película favorita</p>

      <section className="section-spacing">
        <h3 className="section-heading">
          <span>⭐</span> Combos Especiales
        </h3>
        <div className="grid-auto-combos">
          {combos.map((combo) => (
            <div key={combo.id} className="combo-card">
              <h4>{combo.nombre}</h4>
              <p>{combo.descripcion}</p>
              <span className="combo-price">{combo.precio}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h3 className="section-heading section-heading--white">
          <span>🥤</span> Bebidas
        </h3>
        <div className="grid-auto-cards">
          {bebidas.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h3 className="section-heading section-heading--white">
          <span>🌭</span> Comestibles
        </h3>
        <div className="grid-auto-cards">
          {comestibles.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h3 className="section-heading section-heading--white">
          <span>🍫</span> Snacks y Dulces
        </h3>
        <div className="grid-auto-cards">
          {snacks.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Alimentos
