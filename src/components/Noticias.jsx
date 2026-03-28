import { useState, useEffect } from "react"

function Noticias({ vertical = false }) {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)

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

  if (vertical) {
    return (
      <aside className="noticias-aside">
        <h3>
          <span>📰</span> Noticias
        </h3>

        {loading ? (
          <div className="noticias-loading">
            <span className="noticias-spinner noticias-spinner--sm" />
            Cargando...
          </div>
        ) : (
          <div className="noticias-list-vertical">
            {noticias.map((item) => (
              <article key={item.id} className="noticia-item-vertical">
                <h4>{item.title.slice(0, 40)}...</h4>
                <p>{item.body.slice(0, 60)}...</p>
              </article>
            ))}
          </div>
        )}
      </aside>
    )
  }

  return (
    <section className="noticias-section">
      <h2>Noticias y Recomendaciones</h2>

      {loading ? (
        <div className="noticias-loading">
          <span className="noticias-spinner" />
          Cargando noticias...
        </div>
      ) : (
        <div className="noticias-grid">
          {noticias.map((item) => (
            <div key={item.id} className="noticia-card">
              <h3>{item.title.slice(0, 50)}...</h3>
              <p>{item.body.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Noticias
