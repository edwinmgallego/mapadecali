import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { locations } from '../data/locations'
import { createPinIcon } from './pin'

function Recenter({ coords }) {
  const map = useMap()
  if (coords) map.setView(coords, Math.max(map.getZoom(), 16), { animate: true })
  return null
}

export default function MapView({ selectedId, onSelect }) {
  const selected = locations.find((l) => l.id === selectedId)

  return (
    <MapContainer
      center={[3.4415, -76.544]}
      zoom={13}
      zoomControl={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter coords={selected ? selected.coords : null} />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.coords}
          icon={createPinIcon(loc.color, { selected: loc.id === selectedId })}
          eventHandlers={{ click: () => onSelect(loc.id) }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}