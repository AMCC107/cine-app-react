// Botón reutilizable (Guía: azul institucional #6495ED, texto blanco, bordes redondeados)
function Button({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#6495ED",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "8px",
        fontFamily: "sans-serif",
        fontSize: "14px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      {text}
    </button>
  )
}

export default Button
