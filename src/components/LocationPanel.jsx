export default function LocationPanel({ location, onClose }) {
  if (!location) return null

  const videoUrl = `https://www.youtube.com/embed/${location.youtubeId}`

  return (
    <aside className="panel">
      <header className="panel__header" style={{ backgroundColor: location.color }}>
        <h2 className="panel__title">{location.name}</h2>
        <button
          className="panel__close mdl-ripple"
          onClick={onClose}
          aria-label="Cerrar panel"
        >
          ✕
        </button>
      </header>

      <div className="panel__body">
        <img className="panel__image" src={location.image} alt={location.name} />
        <p className="panel__text">{location.testimonial}</p>

        <div className="panel__video">
          <iframe
            className="panel__iframe"
            src={videoUrl}
            title={`Video: ${location.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="panel__note">
          <span className="dot" style={{ backgroundColor: location.color }} />
          {location.coords[0].toFixed(4)}, {location.coords[1].toFixed(4)}
        </p>
      </div>
    </aside>
  )
}