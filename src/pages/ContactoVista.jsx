function ContactoVista() {
  return (
    <main className="page-narrow page-narrow--center">
      <h1 className="page-title-cine">Atención a Clientes</h1>
      <p className="text-muted-light">
        Estamos aquí para ayudarte. Si tuviste algún problema con tu compra o tu visita, contáctanos.
      </p>

      <div className="contact-flex">
        <div className="contact-card">
          <h2>📞 Teléfono</h2>
          <p>
            Llámanos al:
            <br />
            <strong className="highlight">552 122 6060</strong>
          </p>
          <p className="contact-note">Lunes a Domingo de 9:00 a 22:00 hrs.</p>
        </div>

        <div className="contact-card">
          <h2>✉️ Correo</h2>
          <p>
            Escríbenos a:
            <br />
            <strong className="highlight highlight--sm">ayuda@cinepolis-clone.com</strong>
          </p>
          <p className="contact-note">Tiempo de respuesta estimado: 24 hrs.</p>
        </div>
      </div>
    </main>
  )
}

export default ContactoVista
