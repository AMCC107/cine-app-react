import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h3 className="site-footer__title">Cartelera</h3>
          <span className="site-footer__link">Garantía Cinépolis</span>
          <span className="site-footer__link">+Que Cine</span>
        </div>

        <div>
          <h3 className="site-footer__title">Legales</h3>
          <span className="site-footer__link site-footer__link--action" onClick={() => navigate("/terminos")}>
            Términos y condiciones
          </span>
          <span className="site-footer__link">Aviso de privacidad</span>
        </div>

        <div>
          <h3 className="site-footer__title">Contacto</h3>
          <span className="site-footer__link site-footer__link--action" onClick={() => navigate("/contacto")}>
            Atención a clientes
          </span>
          <span className="site-footer__link">T. 552 122 6060</span>
        </div>
      </div>

      <div className="site-footer__bar">
        <span>f 𝕏 📷</span>
      </div>
    </footer>
  )
}

export default Footer
