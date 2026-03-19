import FoodCard from "../components/FoodCard"

const bebidas = [
  { id: 1, nombre: "Refresco Grande", precio: "$55", imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400" },
  { id: 2, nombre: "ICEE", precio: "$50", imagen: "https://icee.mx/wp-content/uploads/N-_0000_SLUSH-FRAMBUESA-300x343.png" },
  { id: 3, nombre: "Agua Natural", precio: "$35", imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400" },
  { id: 4, nombre: "Café", precio: "$45", imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" }
]

const comestibles = [
  { id: 1, nombre: "Hot Dog", precio: "$65", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png" },
  { id: 2, nombre: "Nachos", precio: "$75", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-8XWDtS6Q41mmtBKYOy2KqftpFZo4QYDpA&s" },
  { id: 3, nombre: "Pizza Personal", precio: "$89", imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { id: 4, nombre: "Hamburguesa", precio: "$95", imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" }
]

const snacks = [
  { id: 1, nombre: "Palomitas Grandes", precio: "$85", imagen: "https://i.blogs.es/934bbc/1366_2000/450_1000.jpeg" },
  { id: 2, nombre: "Palomitas Medianas", precio: "$65", imagen: "https://i.blogs.es/934bbc/1366_2000/450_1000.jpeg" },
  { id: 3, nombre: "Chocolates", precio: "$45", imagen: "https://www.bupasalud.com.mx/sites/default/files/styles/640_x_400/public/articulos/2023-09/fotos/chocolate-oscuro.jpg?itok=Qz67dnOY" },
  { id: 4, nombre: "Dulces Variados", precio: "$35", imagen: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400" }
]

const combos = [
  { id: 1, nombre: "Combo Individual", precio: "$125", descripcion: "Palomitas medianas + Refresco mediano" },
  { id: 2, nombre: "Combo Pareja", precio: "$199", descripcion: "Palomitas grandes + 2 Refrescos" },
  { id: 3, nombre: "Combo Familiar", precio: "$289", descripcion: "2 Palomitas grandes + 4 Refrescos" },
  { id: 4, nombre: "Combo Premium", precio: "$159", descripcion: "Nachos + Hot Dog + 2 Refrescos" }
]

function Alimentos() {
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
        <span>🍿</span> Alimentos y Bebidas
      </h2>
      <p style={{ color: "#888", fontSize: "16px", marginBottom: "32px" }}>
        Disfruta de nuestro menú mientras ves tu película favorita
      </p>

      {/* Combos destacados */}
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
          <span>⭐</span> Combos Especiales
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}
        >
          {combos.map((combo) => (
            <div
              key={combo.id}
              style={{
                backgroundColor: "#1e1e1e",
                border: "2px solid #FFC107",
                borderRadius: "12px",
                padding: "20px",
                transition: "transform 0.2s ease"
              }}
            >
              <h4 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0" }}>
                {combo.nombre}
              </h4>
              <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 12px 0" }}>
                {combo.descripcion}
              </p>
              <span style={{ color: "#FFC107", fontSize: "20px", fontWeight: "700" }}>
                {combo.precio}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bebidas */}
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
          <span>🥤</span> Bebidas
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {bebidas.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>

      {/* Comestibles */}
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
          <span>🌭</span> Comestibles
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {comestibles.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>

      {/* Snacks */}
      <section style={{ marginBottom: "20px" }}>
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
          <span>🍫</span> Snacks y Dulces
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {snacks.map((item) => (
            <FoodCard key={item.id} title={item.nombre} image={item.imagen} precio={item.precio} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Alimentos
