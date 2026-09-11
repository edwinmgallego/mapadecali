// Paleta del sitio
export const COLORS = {
  azul: '#0000DD',
  rojo: '#DD0000',
  blanco: '#FFFFFF',
  verde: '#00AA00',
}

/*
 * REEMPLAZA las URLs de imagen por fotos reales del lugar y
 * REEMPLAZA youtubeId por el ID del video de YouTube que quieras incrustar.
 */
export const locations = [
  {
    id: 'plaza-cayzedo',
    name: 'Plaza de Cayzedo',
    coords: [3.4536, -76.5351],
    color: COLORS.azul,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/plaza-cayzedo/900/600',
    testimonial:
      'Estaba sentado debajo de los árboles cuando todo empezó a moverse. Las palomas volaron de golpe y la estatua de Cayzedo parecía cimbrarse. Grité para que la gente saliera de los portales; nunca pensé que esa Plaza, tan llena de historia, también pudiera temblar.',
  },
  {
    id: 'iglesia-la-ermita',
    name: 'Iglesia La Ermita',
    coords: [3.4541, -76.547],
    color: COLORS.rojo,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/la-ermita/900/600',
    testimonial:
      'Recuerdo el repique nervioso de la campana y el ladrillo a la vista de La Ermita agitándose frente al río. La gente salió a la carrera hacia la Calle 35. Era la primera vez que veía la aguja del templo moverse como un péndulo.',
  },
  {
    id: 'torre-san-antonio',
    name: 'Torre de San Antonio',
    coords: [3.4458, -76.5487],
    color: COLORS.verde,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/torre-san-antonio/900/600',
    testimonial:
      'Estábamos en la tarima del parque mirando la ciudad. Cuando sonó el traquido, el Mirador parecía un barco en altamar. Bajamos por la loma del colegio Santa Librada a pie, con el corazón en la boca, mientras las tejas de las casas se desprendían.',
  },
  {
    id: 'estadio-pascual-guerrero',
    name: 'Estadio Pascual Guerrero',
    coords: [3.4284, -76.5467],
    color: COLORS.azul,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/pascual-guerrero/900/600',
    testimonial:
      'Había final de torneo y las tribunas estaban llenas. El sismo llegó justo en el entretiempo: diez mil personas quisieron salir por el mismo portón. El cuero de la cancha se onduló como un lienzo. Duró segundos, pero se sintió eterno.',
  },
  {
    id: 'parque-del-perro',
    name: 'Parque del Perro',
    coords: [3.429, -76.5342],
    color: COLORS.rojo,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/parque-del-perro/900/600',
    testimonial:
      'Cenaba en un restaurante de la avenida cuando las copas empezaron a caer. El estanque del parque se salpicó por todos lados y el perro de la estatua parecía ladrar de miedo. Los vecinos abrieron las puertas de sus casas para que durmiéramos en los andenes.',
  },
  {
    id: 'puente-ortiz',
    name: 'Río Cali · Puente Ortiz',
    coords: [3.4528, -76.5525],
    color: COLORS.verde,
    youtubeId: 'jNQXAC9IVRw',
    image: 'https://picsum.photos/seed/puente-ortiz/900/600',
    testimonial:
      'Caminaba hacia el Panamericano cuando la tierra rugió. El agua del río Cali se agitó hacia atrás y el Puente Ortiz crujió bajo mis pies. Las garcetas se encaramaron en el barandal. Ese día entendí que el río también respira.',
  },
]