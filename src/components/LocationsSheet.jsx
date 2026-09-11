import { locations } from '../data/locations'

export default function LocationsSheet({ onSelect, onClose }) {
  return (
    <div className="sheet-overlay" onClick={onClose}>
      <div className="sheet sheet--list" onClick={(e) => e.stopPropagation()}>
        <span className="sheet__handle" />
        <header className="sheet__header">
          <h2 className="sheet__title">Lugares emblemáticos</h2>
          <button className="mdl-ripple panel__close" onClick={onClose} aria-label="Cerrar lista">
            ✕
          </button>
        </header>

        <ul className="list">
          {locations.map((loc) => (
            <li key={loc.id}>
              <button className="list__item mdl-ripple" onClick={() => onSelect(loc.id)}>
                <span className="list__dot" style={{ backgroundColor: loc.color }} />
                <span className="list__body">
                  <span className="list__name">{loc.name}</span>
                  <span className="list__meta">
                    {loc.coords[0].toFixed(4)}, {loc.coords[1].toFixed(4)}
                  </span>
                </span>
                <span className="list__arrow">→</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}