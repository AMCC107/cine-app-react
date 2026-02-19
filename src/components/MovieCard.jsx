import { useState, useCallback } from "react"
import { FaClock, FaStar, FaHeart, FaInfoCircle, FaPlay } from "react-icons/fa"

const easeOut = "cubic-bezier(0.4, 0, 0.2, 1)"
const transition = (props = "transform, box-shadow, opacity") =>
  `${props} 0.4s ${easeOut}`

const theme = {
  primary: "#6495ED",
  accentGold: "#FFC107",
  accentOrange: "#FF9800",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
  shadow: "0 20px 40px rgba(0,0,0,0.15)",
  shadowHover: "0 28px 56px rgba(0,0,0,0.22)",
  radius: "12px",
  text: { primary: "#1a1a1a", secondary: "#333333", onDark: "#FFFFFF" },
  posterBg: "#1a1a1a",
}

const CARD_WIDTH = 340
const IMAGE_HEIGHT = 400
const BUTTON_SIZE = 40
const RATING_CIRCLE_SIZE = 48

function MovieCard({
  title,
  image,
  onVerDetalle,
  rating = "C",
  duration = "149 min",
  status = "nowShowing",
  director,
  cast,
  releaseDate,
  format = "2D",
  ratingScore,
  showtimeProgress,
  onInfoClick,
  posterMode = true,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const isInteractive = isHovered || isFocused

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onVerDetalle?.()
      }
    },
    [onVerDetalle]
  )

  const toggleFavorite = useCallback((e) => {
    e.stopPropagation()
    setIsFavorite((prev) => !prev)
  }, [])

  const hasMetadata = director || cast || releaseDate
  const ratingPercent = ratingScore != null ? Math.min(100, Math.max(0, ratingScore * 10)) : null

  return (
    <>
      <style>{`
        @keyframes movie-card-shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        .movie-card-shimmer-bg {
          background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
          background-size: 200% 100%;
          animation: movie-card-shimmer 1.5s ease-in-out infinite;
        }
      `}</style>

      <article
        role="button"
        tabIndex={0}
        aria-label={`${title}, ${duration}. Ver sinopsis`}
        onClick={onVerDetalle}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: CARD_WIDTH,
          margin: "0 auto",
          fontFamily: theme.fontFamily,
          borderRadius: theme.radius,
          overflow: "hidden",
          cursor: onVerDetalle ? "pointer" : "default",
          transform: isInteractive ? "scale(1.03)" : "scale(1)",
          transition: transition("transform, box-shadow"),
          boxShadow: isInteractive ? theme.shadowHover : theme.shadow,
          outline: "none",
          ...(isFocused && {
            boxShadow: `${theme.shadowHover}, 0 0 0 3px ${theme.primary}`,
          }),
        }}
      >
        {/* Glassmorphism card */}
        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.78)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: theme.radius,
            overflow: "hidden",
          }}
        >
          {/* Image container: fixed height, dark background, poster containment */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: IMAGE_HEIGHT,
              overflow: "hidden",
              background: theme.posterBg,
            }}
          >
            <img
              src={image}
              alt=""
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                objectFit: posterMode ? "contain" : "cover",
                transform: `translate(-50%, -50%) ${isInteractive ? "scale(1.05)" : "scale(1)"}`,
                opacity: imageLoaded ? 1 : 0.6,
                transition: transition("transform, opacity"),
              }}
            />
            {!imageLoaded && (
              <div
                className="movie-card-shimmer-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                }}
                aria-hidden
              />
            )}

            {/* Multi-layer gradient overlay (bottom dark → top transparent) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Primary badges: rating, status — top-left */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "6px 10px",
                  borderRadius: "8px",
                  background: `linear-gradient(135deg, ${theme.accentGold}, ${theme.accentOrange})`,
                  color: "#1a1a1a",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.02em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                }}
              >
                <FaStar size={12} aria-hidden />
                {rating}
              </span>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  background: status === "nowShowing"
                    ? "linear-gradient(135deg, #81C784, #66BB6A)"
                    : "linear-gradient(135deg, #90A4AE, #78909C)",
                  color: theme.text.onDark,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                {status === "nowShowing" ? "En Cartelera" : "Próximamente"}
              </span>
            </div>

            {/* Secondary badges: format, duration — below primary, semi-transparent */}
            <div
              style={{
                position: "absolute",
                top: 52,
                left: 12,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: "rgba(0,0,0,0.55)",
                  color: theme.text.onDark,
                  backdropFilter: "blur(6px)",
                }}
              >
                {format}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 500,
                  background: "rgba(0,0,0,0.55)",
                  color: theme.text.onDark,
                  backdropFilter: "blur(6px)",
                }}
                aria-label={`Duración: ${duration}`}
              >
                <FaClock size={12} aria-hidden />
                {duration}
              </span>
            </div>

            {/* Action buttons: top-right, 38–40px with hover scale */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                zIndex: 3,
              }}
            >
              {onInfoClick && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onInfoClick()
                  }}
                  aria-label="Más información"
                  style={{
                    width: BUTTON_SIZE,
                    height: BUTTON_SIZE,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255,255,255,0.95)",
                    color: theme.primary,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    transition: transition("transform"),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                >
                  <FaInfoCircle size={18} aria-hidden />
                </button>
              )}
              <button
                type="button"
                onClick={toggleFavorite}
                aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                style={{
                  width: BUTTON_SIZE,
                  height: BUTTON_SIZE,
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(255,255,255,0.95)",
                  color: isFavorite ? "#e53935" : theme.text.secondary,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  transition: transition("transform, color"),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <FaHeart
                  size={20}
                  fill={isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </div>

            {/* Title overlay: bottom, large bold, dramatic shadow — above CTA */}
            <h3
              style={{
                position: "absolute",
                bottom: 58,
                left: 16,
                right: 16,
                margin: 0,
                color: theme.text.onDark,
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.25,
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                zIndex: 2,
              }}
            >
              {title}
            </h3>

            {/* CTA: Ver sinopsis + play icon, slides up on hover, gradient, 12px 24px */}
            {onVerDetalle && (
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 16,
                  right: 16,
                  opacity: isInteractive ? 1 : 0,
                  transform: isInteractive ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
                  transition: transition("opacity, transform"),
                  zIndex: 2,
                  pointerEvents: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "12px 24px",
                    borderRadius: "10px",
                    background: `linear-gradient(135deg, ${theme.primary}, #5a7fd4)`,
                    color: theme.text.onDark,
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    boxShadow: "0 6px 20px rgba(100, 149, 237, 0.5)",
                  }}
                >
                  <FaPlay size={14} aria-hidden />
                  Ver sinopsis
                </span>
              </div>
            )}

            {/* Rating circle: 48px, bottom-right */}
            {ratingPercent != null && (
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  zIndex: 2,
                  width: RATING_CIRCLE_SIZE,
                  height: RATING_CIRCLE_SIZE,
                  borderRadius: "50%",
                  background: `conic-gradient(${theme.accentGold} ${ratingPercent * 3.6}deg, rgba(255,255,255,0.25) 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                }}
                aria-label={`Puntuación: ${ratingScore} de 10`}
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.8)",
                    color: theme.text.onDark,
                    fontSize: "14px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {ratingScore}
                </span>
              </div>
            )}
          </div>

          {/* Metadata drawer: slide-up with glassmorphism */}
          {hasMetadata && (
            <div
              style={{
                maxHeight: isInteractive ? 140 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div
                style={{
                  padding: "14px 16px",
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  fontSize: "13px",
                  color: theme.text.secondary,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  lineHeight: 1.55,
                }}
              >
                {director && <p style={{ margin: "0 0 6px" }}><strong>Director:</strong> {director}</p>}
                {cast && <p style={{ margin: "0 0 6px" }}><strong>Elenco:</strong> {cast}</p>}
                {releaseDate && <p style={{ margin: 0 }}><strong>Estreno:</strong> {releaseDate}</p>}
              </div>
            </div>
          )}

          {/* Optional showtime progress bar at bottom */}
          {showtimeProgress != null && showtimeProgress >= 0 && showtimeProgress <= 100 && (
            <div
              style={{
                height: 5,
                background: "rgba(0,0,0,0.12)",
                borderRadius: 3,
                margin: "0 16px 12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${showtimeProgress}%`,
                  background: `linear-gradient(90deg, ${theme.primary}, #81C784)`,
                  borderRadius: 3,
                  transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          )}
        </div>
      </article>
    </>
  )
}

export default MovieCard
