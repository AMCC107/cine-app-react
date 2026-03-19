function TerminosCondiciones() {
    return (
      <main style={{ 
        maxWidth: "800px", 
        margin: "48px auto", 
        padding: "24px", 
        color: "#FFFFFF", 
        fontFamily: "sans-serif",
        minHeight: "60vh"
      }}>
        <h1 style={{ color: "#FEC429", borderBottom: "1px solid #333", paddingBottom: "16px" }}>
          Términos y Condiciones
        </h1>
        
        <div style={{ marginTop: "24px", lineHeight: "1.6", color: "#E0E0E0" }}>
          <h3>1. Aceptación de los términos</h3>
          <p>Al acceder y utilizar nuestra plataforma de compra de boletos, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al servicio.</p>
          
          <h3 style={{ marginTop: "24px" }}>2. Compra de Boletos</h3>
          <p>Todas las ventas de boletos son definitivas. No se realizan reembolsos ni cambios a menos que la función sea cancelada por el cine. Asegúrese de revisar su selección de horario y asiento antes de confirmar el pago.</p>
          
          <h3 style={{ marginTop: "24px" }}>3. Privacidad</h3>
          <p>Sus datos personales están protegidos según nuestro Aviso de Privacidad. No compartimos su información con terceros sin su consentimiento explícito.</p>
        </div>
      </main>
    );
  }
  
  export default TerminosCondiciones;