import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: "#0B1521", 
    color: "#FFFFFF",
    padding: "48px 24px",
    fontFamily: "sans-serif",
    marginTop: "auto"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "32px"
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px"
  };

  const linkStyle = {
    color: "#A0AAB2",
    display: "block",
    marginBottom: "12px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none"
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Columna 1 */}
        <div>
          <h3 style={titleStyle}>Cartelera</h3>
          <span style={linkStyle}>Garantía Cinépolis</span>
          <span style={linkStyle}>+Que Cine</span>
        </div>

        {/* Columna 2 - Legales (Interactiva) */}
        <div>
          <h3 style={titleStyle}>Legales</h3>
          <span 
            style={{...linkStyle, color: "#FFFFFF", fontWeight: "bold"}} 
            onClick={() => navigate('/terminos')}
          >
            Términos y condiciones
          </span>
          <span style={linkStyle}>Aviso de privacidad</span>
        </div>

        {/* Columna 3 - Contacto (Interactiva) */}
        <div>
          <h3 style={titleStyle}>Contacto</h3>
          <span 
            style={{...linkStyle, color: "#FFFFFF", fontWeight: "bold"}} 
            onClick={() => navigate('/contacto')}
          >
            Atención a clientes
          </span>
          <span style={linkStyle}>T. 552 122 6060</span>
        </div>

      </div>

      {/* Barra inferior */}
      <div style={{
        maxWidth: "1200px",
        margin: "32px auto 0",
        borderTop: "1px solid #1E2D3D",
        paddingTop: "16px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "#A0AAB2"
      }}>
        <span>Sitio desarrollado para proyecto académico</span>
        <span>f 𝕏 📷</span> {/* Iconos sociales simulados */}
      </div>
    </footer>
  );
}

export default Footer;
