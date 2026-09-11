import L from 'leaflet'

export function createPinIcon(color, { selected = false } = {}) {
  const size = selected ? 54 : 40
  const anchorBottom = selected ? 57 : 42
  return L.divIcon({
    className: 'map-pin-wrap',
    html: `
      <svg width="${size}" height="${size}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 1C11 1 4 8 4 17c0 10 16 22 16 22s16-12 16-22C36 8 29 1 20 1z"
              fill="${color}"
              stroke="#FFFFFF"
              stroke-width="2.4"
              stroke-linejoin="round"/>
        <circle cx="20" cy="17" r="6.5" fill="#FFFFFF"/>
        <circle cx="20" cy="17" r="3" fill="${color}"/>
      </svg>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, anchorBottom],
    popupAnchor: [0, -anchorBottom],
  })
}