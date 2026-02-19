// Importamos la tarjeta reutilizable
import FoodCard from "../components/FoodCard"

const sectionTitleStyle = {
  color: "#0B2B5C",
  marginBottom: "16px",
  fontSize: "24px",
  fontFamily: "sans-serif",
  fontWeight: "600"
}
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px"
}

function Alimentos() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px 16px",
        fontFamily: "sans-serif"
      }}
    >
      {/* Bebidas */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={sectionTitleStyle}>Bebidas</h2>
        <div style={gridStyle}>
          <FoodCard
            title="Refresco Grande"
            image="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400"
          />
          <FoodCard
            title="ICEE"
            image="https://icee.mx/wp-content/uploads/N-_0000_SLUSH-FRAMBUESA-300x343.png"
          />
        </div>
      </section>

      {/* Comestibles */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={sectionTitleStyle}>Comestibles</h2>
        <div style={gridStyle}>
          <FoodCard
            title="Hot Dog"
            image="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png"
          />
          <FoodCard
            title="Nachos"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-8XWDtS6Q41mmtBKYOy2KqftpFZo4QYDpA&s"
          />
        </div>
      </section>

      {/* Snacks */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={sectionTitleStyle}>Snacks</h2>
        <div style={gridStyle}>
          <FoodCard
            title="Palomitas"
            image="https://i.blogs.es/934bbc/1366_2000/450_1000.jpeg"
          />
          <FoodCard
            title="Chocolates"
            image="https://media.istockphoto.com/id/522735736/es/foto/fondo-de-chocolate.jpg?s=612x612&w=0&k=20&c=83tIn1FI_p4xcsYxMcgCb21yxdLBcM3xTMtl29acLck="
          />
        </div>
      </section>
    </main>
  )
}

export default Alimentos
