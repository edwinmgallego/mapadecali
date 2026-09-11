import { useState } from 'react'
import MapView from './components/MapView'
import LocationPanel from './components/LocationPanel'
import LocationsSheet from './components/LocationsSheet'
import { locations, COLORS } from './data/locations'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [panelOpen, setPanelOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const selected = locations.find((l) => l.id === selectedId)

  const handleSelect = (id) => {
    setSelectedId(id)
    setPanelOpen(true)
    setSheetOpen(false)
  }

  const handleClose = () => setPanelOpen(false)

  const toggleSheet = () => setSheetOpen((v) => !v)

  return (
    <div className="app">
      <header className="header">
        <div className="header__brand">
          <span className="header__logo" aria-hidden="true">
            <i style={{ backgroundColor: COLORS.azul }} />
            <i style={{ backgroundColor: COLORS.rojo }} />
            <i style={{ backgroundColor: COLORS.verde }} />
          </span>
          <h1 className="header__title">
            Memoria Sismos
            <span className="header__sub">Cali, Colombia</span>
          </h1>
        </div>
      </header>

      <main className="layout">
        <div className="layout__map">
          <MapView selectedId={selectedId} onSelect={handleSelect} />

          <footer className="footer" aria-label="Pie de página">
            <span>Memoria Sismos Cali &copy; 2026 — Mapa de testimonios del terremoto</span>
            <span className="footer__sep" aria-hidden="true">·</span>
            <span>Cali, Valle del Cauca, Colombia</span>
          </footer>

          {!panelOpen && !sheetOpen && (
            <div className="hint" role="status">Toca un pin para leer el testimonio →</div>
          )}

          <button className="fab mdl-ripple" onClick={toggleSheet} aria-label="Abrir lista de lugares">
            {sheetOpen ? '✕' : '☰'}
          </button>
        </div>

        <LocationPanel
          location={panelOpen ? selected : null}
          onClose={handleClose}
        />

        {sheetOpen && (
          <LocationsSheet onSelect={handleSelect} onClose={toggleSheet} />
        )}
      </main>
    </div>
  )
}