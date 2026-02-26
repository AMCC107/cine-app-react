import { useState, useEffect } from "react"

function Noticias({ vertical = false }) {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect para cargar datos al montar el componente
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data.slice(0, 5))
        setLoading(false)
      })
      .catch(() => {
        setNoticias([])
        setLoading(false)
      })
  }, [])

  // Estilos para layout vertical (sidebar)
  if (vertical) {
    return (
      <aside
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "12px",
          padding: "20px",
          fontFamily: "sans-serif",
          height: "fit-content",
          position: "sticky",
          top: "100px"
        }}
      >
        <h3
          style={{
            color: "#FFC107",
            fontSize: "18px",
            fontWeight: "600",
            margin: "0 0 16px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span>📰</span> Noticias
        </h3>

        {loading ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888" }}>
            <span
              style={{
                display: "inline-block",
                width: "18px",
                height: "18px",
                border: "2px solid #333",
                borderTopColor: "#FFC107",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            Cargando...
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {noticias.map((item) => (
              <article
                key={item.id}
                style={{
                  padding: "14px",
                  backgroundColor: "#252525",
                  borderRadius: "8px",
                  borderLeft: "3px solid #FFC107",
                  transition: "transform 0.2s ease, background-color 0.2s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#2a2a2a"
                  e.currentTarget.style.transform = "translateX(4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#252525"
                  e.currentTarget.style.transform = "translateX(0)"
                }}
              >
                <h4
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    margin: "0 0 6px 0",
                    lineHeight: 1.3,
                    textTransform: "capitalize"
                  }}
                >
                  {item.title.slice(0, 40)}...
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "12px",
                    lineHeight: 1.4,
                    margin: 0
                  }}
                >
                  {item.body.slice(0, 60)}...
                </p>
              </article>
            ))}
          </div>
        )}
      </aside>
    )
  }

  // Layout horizontal original (para otras páginas)
  return (
    <section
      style={{
        padding: "32px 0",
        borderTop: "1px solid #333",
        fontFamily: "sans-serif"
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "20px"
        }}
      >
        Noticias y Recomendaciones
      </h2>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#888" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              border: "3px solid #333",
              borderTopColor: "#FFC107",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          Cargando noticias...
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px"
          }}
        >
          {noticias.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "20px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0 0 12px",
                  lineHeight: 1.4,
                  textTransform: "capitalize"
                }}
              >
                {item.title.slice(0, 50)}...
              </h3>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {item.body.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Noticias
