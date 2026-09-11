import { useState } from 'react'
import MapView from './components/MapView'
import LocationPanel from './components/LocationPanel'
import { locations, COLORS } from './data/locations'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [panelOpen, setPanelOpen] = useState(false)
  const selected = locations.find((l) => l.id === selectedId)

  const handleSelect = (id) => {
    setSelectedId(id)
    setPanelOpen(true)
  }

  const handleClose = () => setPanelOpen(false)

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
          {!panelOpen && (
            <div className="hint">
              Toca un pin para leer el testimonio →
            </div>
          )}
        </div>

        <LocationPanel
          location={panelOpen ? selected : null}
          onClose={handleClose}
        />
      </main>
    </div>
  )
}