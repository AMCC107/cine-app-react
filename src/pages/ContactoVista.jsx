function ContactoVista() {
    return (
      <main style={{ 
        maxWidth: "800px", 
        margin: "48px auto", 
        padding: "24px", 
        color: "#FFFFFF", 
        fontFamily: "sans-serif",
        minHeight: "60vh",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#FEC429", marginBottom: "16px" }}>
          Atención a Clientes
        </h1>
        <p style={{ color: "#E0E0E0", marginBottom: "48px" }}>
          Estamos aquí para ayudarte. Si tuviste algún problema con tu compra o tu visita, contáctanos.
        </p>
  
        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          flexWrap: "wrap",
          gap: "24px" 
        }}>
          <div style={{ backgroundColor: "#1E2D3D", padding: "24px", borderRadius: "8px", flex: "1", minWidth: "250px" }}>
            <h2 style={{ margin: "0 0 16px 0" }}>📞 Teléfono</h2>
            <p>Llámanos al:<br/><strong style={{ fontSize: "20px" }}>552 122 6060</strong></p>
            <p style={{ fontSize: "12px", color: "#A0AAB2" }}>Lunes a Domingo de 9:00 a 22:00 hrs.</p>
          </div>
  
          <div style={{ backgroundColor: "#1E2D3D", padding: "24px", borderRadius: "8px", flex: "1", minWidth: "250px" }}>
            <h2 style={{ margin: "0 0 16px 0" }}>✉️ Correo</h2>
            <p>Escríbenos a:<br/><strong style={{ fontSize: "18px" }}>ayuda@cinepolis-clone.com</strong></p>
            <p style={{ fontSize: "12px", color: "#A0AAB2" }}>Tiempo de respuesta estimado: 24 hrs.</p>
          </div>
        </div>
      </main>
    );
  }
  
  export default ContactoVista;