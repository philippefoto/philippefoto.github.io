/**
 * ==============================================================================
 * PHILIPPE FOTO - HTML5 TEMPLATE INTERACTIVITY SCRIPT
 * ==============================================================================
 * CÓMO CAMBIAR LA IMAGEN DE FONDO HORIZONTAL DEL HERO EN ESTE TEMPLATE:
 * 1. Para cambiar la imagen horizontal de fondo de la portada (#inicio):
 *    - Abre styles.css y modifica la URL en `.hero-section { background-image: ... }`
 *    - O cambia la variable `HERO_BACKGROUND_IMAGE_URL` más abajo y descommenta la función.
 * ==============================================================================
 */
/**
 * ==============================================================================
 * PHILIPPE FOTO - HTML5 TEMPLATE INTERACTIVITY SCRIPT
 * ==============================================================================
 * CÓMO CAMBIAR LA IMAGEN DE FONDO HORIZONTAL DEL HERO EN ESTE TEMPLATE:
 * 1. Para cambiar la imagen horizontal de fondo de la portada (#inicio):
 *    - Abre styles.css y modifica la URL en `.hero-section { background-image: ... }`
 *    - O cambia la variable `HERO_BACKGROUND_IMAGE_URL` más abajo y descommenta la función.
 * ==============================================================================
 */
// URL OPCIONAL DE IMAGEN DE FONDO HORIZONTAL DEL HERO
const HERO_BACKGROUND_IMAGE_URL = 'IMG/hero_2026-05-21.png';
const CONTACT_EMAIL = 'contact@philippefoto.cc';
//https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=85'
/**
 * CONFIGURACIÓN DE RUTA BASE DE IMÁGENES:
 * Las imágenes están almacenadas en la carpeta 'IMG' dentro de 'public/'.
 * - En un servidor web local (ej. Next.js, Vite, Live Server donde 'public' es la raíz web):
 *   la ruta 'IMG/' o '/IMG/' apuntará a 'public/IMG/'.
 * - Si ejecutas index.html directamente o los archivos están al mismo nivel, 'IMG/' es la ruta relativa estándar.
 */
const IMAGE_BASE_PATH = 'IMG/';

// 1. CONFIGURACIÓN Y LISTA DE IMÁGENES DE LA GALERÍA (50 fotografías vinculadas a la carpeta IMG)
const GALLERY_ITEMS = [
  // ============================================================================
  // RETRATOS (14 Fotos - archivos portrait_*.jpg)
  // ============================================================================
  {
    id: 'retrato-1',
    fileName: 'portrait_DSCF7325.jpg',
    title: 'Bling Bang',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF7325.jpg',
    description: 'Detalle de mano tatuada con alto contraste en blanco y negro y textura natural.',
    location: 'Santa Cecilia, Oblatos. Guadalajara. México.',
    date: '2026',
    tags: ['Mano', 'Tatuaje', 'Editorial']
  },
  {
    id: 'retrato-2',
    fileName: 'portrait_DSCF6438.jpg',
    title: 'all white',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF6438.jpg',
    description: 'Retrato cercano con enfoque selectivo y profundidad de campo orgánica.',
    location: 'Zapopan. Guadalajara. México',
    date: '2025',
    tags: ['Retrato', 'Primer Plano', 'Natural']
  },
  {
    id: 'retrato-3',
    fileName: 'portrait_20260228_DSCF8670_street.jpg',
    title: 'danza sonriente',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_20260228_DSCF8670_street.jpg',
    description: 'Fotografía que combina tardición y juventud, aprovechando la luz natural de la tarde.',
    location: 'Guadalajara centro. México',
    date: '2026',
    tags: ['Danza', 'Urbano', 'Retrato']
  },
  {
    id: 'retrato-4',
    fileName: 'portrait_20260301_DSCF9031_car.jpg',
    title: 'woof',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_20260301_DSCF9031_car.jpg',
    description: 'carácter y presencia canina, nariz y ojos enfocados en primer plano.',
    location: 'Santa Tere. Guadalajara. México',
    date: '2026',
    tags: ['Perro', 'Retrato', 'Lengua']
  },
  {
    id: 'retrato-5',
    fileName: 'portrait_20260301_DSCF9183_.jpg',
    title: 'azulado',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_20260301_DSCF9183_.jpg',
    description: 'Captura con iluminación suave, gradación de tonos azules en contraste con el blanco.',
    location: 'ExPenal de Oblatos. Guadalajara. México',
    date: '2026',
    tags: ['Sombrero', 'Azul', 'Street']
  },
  {
    id: 'retrato-6',
    fileName: 'portrait_20260423_DSCF3679_street.jpg',
    title: 'Dark blue smile',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_20260423_DSCF3679_street.jpg',
    description: 'Retrato espontáneo en entorno urbano con luz natural y contraste marcado entre figura y fondo.',
    location: 'Guadalajara Centro. México.',
    date: '2026',
    tags: ['Street', 'Retrato', 'Luz Natural']
  },
  {
    id: 'retrato-7',
    fileName: 'portrait_4869_DSCF4869_20260925_01.jpg',
    title: 'Retrato casual de noche',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_4869_DSCF4869_20260925_01.jpg',
    description: 'Retrato nocturno con poca luz, 75mm.',
    location: 'El Palomar. Tlajomulco de Zúñiga. México',
    date: '2026',
    tags: ['Noche', 'Retrato', 'Perfil']
  },
  {
    id: 'retrato-8',
    fileName: 'portrait_DSCF0263 (2).jpg',
    title: 'Mirada y Carácter',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF0263 (2).jpg',
    description: 'Retrato en blanco y negro de boxeador con alta luminosidad.',
    location: 'Barcelona',
    date: '2026',
    tags: ['Retrato', 'Primer Plano', 'Boxeador']
  },
  {
    id: 'retrato-9',
    fileName: 'portrait_DSCF1909_03.jpg',
    title: 'Rasta sides',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF1909_03.jpg',
    description: 'Retrato de perfil jugando con los contrastes.',
    location: 'Les Planes. Vallés Occidental. Barcelona.',
    date: '2026',
    tags: ['Perfil', 'Rastas', 'Retrato']
  },
  {
    id: 'retrato-10',
    fileName: 'portrait_DSCF6073_02.jpg',
    title: 'Catrina a contraluz',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF6073_02.jpg',
    description: 'Esquema de iluminación a contraluz.',
    location: 'Guadalajara. México',
    date: '2025',
    tags: ['Rembrandt', 'Retrato', 'Catrina']
  },
  {
    id: 'retrato-11',
    fileName: 'portrait_DSCF7755.jpg',
    title: 'Graffiti y grafitero',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF7755.jpg',
    description: 'Captura natural al aire libre autor con su obra. Autenticidad y frescura.',
    location: 'Exteriores. Santa Cecilia. Guadalajara. México.',
    date: '2026',
    tags: ['Natural', 'Graffiti', 'Retrato']
  },
  {
    id: 'retrato-12',
    fileName: 'portrait_DSCF7765_01.jpg',
    title: 'Perfil BN',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF7765_01.jpg',
    description: 'Retrato con balance extremo de claros y oscuros para resaltar la silueta.',
    location: 'Santa Cecilia. Guadalajara. México.',
    date: '2026',
    tags: ['Retrato', 'Contraste', 'Urban']
  },
  {
    id: 'retrato-13',
    fileName: 'portrait_R1-03268-0000.jpg',
    title: 'Retrato Análogo Ilford HP5 plus',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_R1-03268-0000.jpg',
    description: 'Foto análoga en blanco y negro.',
    location: 'Guadalajara Centro. México.',
    date: '2026',
    tags: ['Analógico', 'Retrato', 'Film']
  },
  {
    id: 'retrato-14',
    fileName: 'portrait_DSCF0435_01.jpg',
    title: 'Luz y lentes',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF0435_01.jpg',
    description: 'Retrato buscando resaltar los lentes y la mirada.',
    location: 'Barcelona.',
    date: '2026',
    tags: ['Retrato', 'Lentes', 'Summer']
  },
    {
    id: 'retrato-15',
    fileName: 'portrait_DSCF2790_01.jpg',
    title: 'Retrato en blanco y negro - skater',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF2790_01.jpg',
    description: 'skate life - retrato callejero.',
    location: 'Luxemburg skate park',
    date: '2026',
    tags: ['Retrato', 'Encuadre', 'Urban']
  },
    {
    id: 'retrato-16',
    fileName: 'portrait_DSCF7289_02.jpg',
    title: 'Retrato en blanco y negro',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_DSCF7289_02.jpg',
    description: 'retrato callejero.',
    location: 'Santa Cecilia, Oblatos. Guadalajara. México',
    date: '2026',
    tags: ['Retrato', 'Blanco y negro', 'Street']
  },
    {
    id: 'retrato-17',
    fileName: 'portrait_5813_DSCF5813.jpg',
    title: '90s flash',
    category: 'retrato',
    categoryLabel: 'Retrato',
    imageUrl: IMAGE_BASE_PATH + 'portrait_5813_DSCF5813.jpg',
    description: 'retrato nocturno aplicando un drag shutter con flash para congelar la imagen y arrastrar las luces',
    location: 'Parque Morelos. Guadalajara. México',
    date: '2026',
    tags: ['Retrato', 'Night', 'Street', 'flash']
  },

  // ============================================================================
  // AUTOMOTRIZ (21 Fotos - archivos car_*.jpg)
  // ============================================================================
  {
    id: 'auto-1',
    fileName: 'car_20250615-1115-cars-61.jpg',
    title: 'Ferrari Red',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20250615-1115-cars-61.jpg',
    description: 'Resalte del color rojo ferrari contra el fondo de la ciudad, emparejamiento con el rojo de la camiseta de la chica',
    location: 'Circuito Hnos Gallo. Guadalajara, México.',
    date: '2025',
    tags: ['Track Day', 'Pista', 'Ferrari']
  },
  {
    id: 'auto-2',
    fileName: 'car_20250615-1243-cars-971_02.jpg',
    title: 'Drift Freeze',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20250615-1243-cars-971_02.jpg',
    description: 'Buscando el ángulo de las ruedas al hacer drift, resaltando las líneas aerodinámicas y agresivas de la carrocería.',
    location: 'Circuito Hnos Gallo. Guadalajara, México.',
    date: '2025',
    tags: ['Aerodinámica', 'Drift', 'Freeze']
  },
  {
    id: 'auto-3',
    fileName: 'car_20251123_DSCF6763.jpg',
    title: 'Mustang Replica Beauty Shot',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20251123_DSCF6763.jpg',
    description: 'Toma estática detallada con filtro polarizador para eliminar reflejos indeseados. Beauty shot.',
    location: 'Locación Urbana, Autozone, Guadalajara, México',
    date: '2025',
    tags: ['Polarizador', 'Detalle', 'Estático']
  },
  {
    id: 'auto-4',
    fileName: 'car_20251123_DSCF6955_street.jpg',
    title: 'Nissan z drift spec',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20251123_DSCF6955_street.jpg',
    description: 'Fotografía dinámica de automoción en circuito con barrido dinámico de velocidad.',
    location: 'Autódromo Hnos Gallo, Guadalajara, México',
    date: '2025',
    tags: ['Street', 'Urbano', 'Rolling']
  },
  {
    id: 'auto-5',
    fileName: 'car_20251123_DSCF7022_street.jpg',
    title: 'Mexican Drift Championship - Mustang',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20251123_DSCF7022_street.jpg',
    description: 'Panning en circuito con barrido dinámico de velocidad.',
    location: 'Autódromo Hnos Gallo, Guadalajara, México',
    date: '2025',
    tags: ['Mustang', 'Drift', 'Wrap']
  },
  {
    id: 'auto-6',
    fileName: 'car_20251123_DSCF7287_street.jpg',
    title: 'Night Street Automotive DSCF7287',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20251123_DSCF7287_street.jpg',
    description: 'Fotografía dinámica de automoción en circuito con barrido dinámico de velocidad.',
    location: 'Autódromo Hnos Gallo, Guadalajara, México',
    date: '2025',
    tags: ['Nocturno', 'Reflejos', 'Street']
  },
  {
    id: 'auto-7',
    fileName: 'car_20260208_DSCF8315.jpg',
    title: 'Mach 1',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260208_DSCF8315.jpg',
    description: 'Vista lateral trasera del mustang mach 1 en base aérea militar',
    location: 'base aérea militar',
    date: '2025',
    tags: ['Mach 1', 'Classic car', 'Luz cálida']
  },
  {
    id: 'auto-8',
    fileName: 'car_20260208_DSCF8332.jpg',
    title: 'summer vibes VW',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260208_DSCF8332.jpg',
    description: 'Plano abierto VW bettle + dueño',
    location: 'Base aérea',
    date: '2025',
    tags: ['Bettle', 'VW', 'Landscape']
  },
  {
    id: 'auto-9',
    fileName: 'car_20260208_DSCF8462.jpg',
    title: 'Fast and Furious',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260208_DSCF8462.jpg',
    description: 'Enfoque en la escala de colores de los coches.',
    location: 'Base aérea',
    date: '2025',
    tags: ['Carrocería', 'Fast & Furious', 'Deportivo']
  },
  {
    id: 'auto-10',
    fileName: 'car_20260208_DSCF8481.jpg',
    title: 'VW travel ready',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260208_DSCF8481.jpg',
    description: 'Perspectiva frontal destacando los tonos cálidos y la sensación de viaje.',
    location: 'Base aérea',
    date: '2025',
    tags: ['VW', 'Classic Car', 'Porta Equipajes']
  },
  {
    id: 'auto-11',
    fileName: 'car_20260228_DSCF8776.jpg',
    title: 'Diseño & Carácter - Bodas y XV años',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260228_DSCF8776.jpg',
    description: 'Toma tres cuartos delantera con luz natural esculpiendo los volúmenes del coche.',
    location: 'Catedral de Guadalajara, México',
    date: '2026',
    tags: ['Tres Cuartos', 'Diseño Clásico', 'Automotriz']
  },
  {
    id: 'auto-12',
    fileName: 'car_20260301_DSCF8994.jpg',
    title: 'Lowriders delight. Detalle cuadro interior Chevy Impala',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260301_DSCF8994.jpg',
    description: 'Detalle volante y cuadro interior, low riders.',
    location: 'Parque de la Ex-Penal de Oblatos, Guadalajara. México.',
    date: '2026',
    tags: ['Interior Shot', 'Lowrider', 'Impala']
  },
  {
    id: 'auto-13',
    fileName: 'car_20260329_DSCF2604.jpg',
    title: 'rodilla al suelo',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260329_DSCF2604.jpg',
    description: 'Panning shot en curva de kawasaki ninja color verde en circuito.',
    location: 'Autódromo Hnos Gallo, Guadalajara. México',
    date: '2026',
    tags: ['Kawasaki ninja', 'Autódromo', 'Moto']
  },
  {
    id: 'auto-14',
    fileName: 'car_20260329_DSCF2622.jpg',
    title: 'Ducati Panigale',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_20260329_DSCF2622.jpg',
    description: 'Primer plano en curva ducati panigale.',
    location: 'Autódromo Hnos Gallo, Guadalajara. México',
    date: '2026',
    tags: ['Ducati', 'Moto', 'Panning shot']
  },
  {
    id: 'auto-15',
    fileName: 'car_4913_DSCF4913_20260925.jpg',
    title: 'At night',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_4913_DSCF4913_20260925.jpg',
    description: 'Sesión de fotos con el dueño.',
    location: 'Street, Guadalajara, México.',
    date: '2026',
    tags: ['Jeep Wrangler', 'Night', 'Car & owner']
  },
  {
    id: 'auto-16',
    fileName: 'car_DSCF4721.jpg',
    title: 'Tow Truck',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF4721.jpg',
    description: 'Tow Truck rust mod.',
    location: 'Atotonilco, México.',
    date: '2026',
    tags: ['Tow Truck', 'Rust Mod', 'Car & owner']
  },
  {
    id: 'auto-17',
    fileName: 'car_DSCF4336.jpg',
    title: 'cortinas',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF4336.jpg',
    description: 'Cortinas clásicas de una combi VW.',
    location: 'Atotonilco, México',
    date: '2026',
    tags: ['VW', 'Cortinas', 'Combi']
  },
  {
    id: 'auto-18',
    fileName: 'car_DSCF4521.jpg',
    title: 'All you need is a Jeep',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF4521.jpg',
    description: 'Encuadre agresivo que resalta la postura ancha y presencia contundente del jeep. Con filtro de niebla',
    location: 'Atotonilco, México',
    date: '2026',
    tags: ['Jeep Cherokee', 'Ángulo Alto', 'Retro colors']
  },
  {
    id: 'auto-19',
    fileName: 'car_DSCF4441.jpg',
    title: 'Detalle Cadillac',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF4441.jpg',
    description: 'Fotografía con filtro de niebla para dar un aspecto de ensueño a las luces del Cadillac.',
    location: 'Atotonilco, México',
    date: '2026',
    tags: ['Detalle Luces', 'Cadillac', 'Classic car']
  },
  {
    id: 'auto-20',
    fileName: 'car_DSCF6721.jpg',
    title: 'Nissan z drift stance',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF6721.jpg',
    description: 'Acción congelada en drift',
    location: 'Autódromo Hnos Gallo, Guadalajara, México',
    date: '2026',
    tags: ['drift', 'MDC', 'nissan z']
  },
  {
    id: 'auto-21',
    fileName: 'car_DSCF6728.jpg',
    title: 'Mustang done right',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF6728.jpg',
    description: 'Mustang drift stance, acción congelada.',
    location: 'Autódromo Hnos Gallo, Guadalajara, México',
    date: '2025',
    tags: ['Mustang', 'Drift', 'MDC']
  },
    {
    id: 'auto-22',
    fileName: 'car_DSCF2703_01.jpg',
    title: 'Dark Mustang',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF2703_01.jpg',
    description: 'Mustang black wrap.',
    location: 'Luxemburgo',
    date: '2026',
    tags: ['Urban', 'Mustang', 'Street']
  },
    {
    id: 'auto-23',
    fileName: 'car_DSCF3163_01.jpg',
    title: 'Citroën 2CV',
    category: 'automotriz',
    categoryLabel: 'Automotriz',
    imageUrl: IMAGE_BASE_PATH + 'car_DSCF3163_01.jpg',
    description: 'Classic car Citroën "CV.',
    location: 'Pas-De-Calais, Francia',
    date: '2026',
    tags: ['Classic Car', '2CV', 'Red']
  },

  // ============================================================================
  // EVENTOS (15 Fotos - archivos event_*.jpg)
  // ============================================================================
  {
    id: 'evento-1',
    fileName: 'event_20250725-1354-9.jpg',
    title: 'Celebración & Emoción',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_20250725-1354-9.jpg',
    description: 'Documentación espontánea de momentos clave en jugadas de Tastoanes.',
    location: 'Tonalá. Guadalajara. México.',
    date: '2025',
    tags: ['Social', 'Celebración', 'Máscaras']
  },
  {
    id: 'evento-2',
    fileName: 'event_20250725-1620-street-758.jpg',
    title: 'Festival & Ambiente Urbano',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_20250725-1620-street-758.jpg',
    description: 'Energía colectiva y ambientación en festival cultural de Tastoanes.',
    location: 'Tonalá. Guadalajara. México.',
    date: '2025',
    tags: ['Festival', 'Street', 'Cultura']
  },
  {
    id: 'evento-3',
    fileName: 'event_20251123_DSCF7580_street.jpg',
    title: 'McLaren Show Off',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_20251123_DSCF7580_street.jpg',
    description: 'Car roll en evento de drift en circuito privado.',
    location: 'Autódromo Hnos Gallo. Guadalajara. México.',
    date: '2025',
    tags: ['McLaren', 'Car Show', 'Social']
  },
  {
    id: 'evento-4',
    fileName: 'event_DSCF0056_01.jpg',
    title: 'Mic Check',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0056_01.jpg',
    description: 'Fiestas populares y Hip Hop.',
    location: 'Barcelona',
    date: '2026',
    tags: ['Hip Hop', 'ACROS', 'Festival']
  },
  {
    id: 'evento-5',
    fileName: 'event_DSCF0124_01.jpg',
    title: 'scratch and remix',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0124_01.jpg',
    description: 'Bases de Hip Hop en escencario',
    location: 'Barcelona',
    date: '2026',
    tags: ['Hip Hop', 'DJ', 'Festival']
  },
  {
    id: 'evento-6',
    fileName: 'event_DSCF0229_01.jpg',
    title: 'Training Day',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0229_01.jpg',
    description: 'Boxeador calentando al aire libre en evento de box.',
    location: 'Barcelona',
    date: '2026',
    tags: ['Boxeo', 'Evento', 'Deporte']
  },
  {
    id: 'evento-7',
    fileName: 'event_DSCF0267_01.jpg',
    title: 'En el ring',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0267_01.jpg',
    description: 'Captura del instante frente a frente de los boxeadores.',
    location: 'Barcelona.',
    date: '2026',
    tags: ['Premios', 'Boxeo', 'Deporte']
  },
  {
    id: 'evento-8',
    fileName: 'event_DSCF0460_01.jpg',
    title: 'Fight!',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0460_01.jpg',
    description: 'Fotografía que busca resaltar la playera con el nombre del gimnasio dentro del ring.',
    location: 'Barcelona.',
    date: '2026',
    tags: ['Deportes', 'Boxeo', 'Branding']
  },
  {
    id: 'evento-9',
    fileName: 'event_DSCF0718_01.jpg',
    title: 'Foto grupal compañía de Danza',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0718_01.jpg',
    description: 'Iluminación natural y foto grupal con un aire urbano y relajado.',
    location: 'Les Planes. Vallés Occidental. Barcelona.',
    date: '2026',
    tags: ['Danza', 'Grupo', 'Espectáculo']
  },
  {
    id: 'evento-10',
    fileName: 'event_DSCF0824_01.jpg',
    title: 'Foto grupal compañía de Danza II',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF0824_01.jpg',
    description: 'Foto grupal haciendo converger las líneas del puente para reforzar la mirada al centro',
    location: 'Les Planes. Vallés Occidental. Barcelona.',
    date: '2026',
    tags: ['Danza', 'Grupo', 'Puente']
  },
  {
    id: 'evento-11',
    fileName: 'event_DSCF1167_03.jpg',
    title: 'Directo & Escena',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF1167_03.jpg',
    description: 'Fotografía de directo y música con seguimiento de la acción en vivo.',
    location: 'Les Planes. Vallés Occidental. Barcelona.',
    date: '2026',
    tags: ['Danza', 'Música', 'Escena']
  },
  {
    id: 'evento-12',
    fileName: 'event_DSCF5636_01.jpg',
    title: 'Nosotros (US)',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF5636_01.jpg',
    description: 'Ambiente relajado y de estudio jugando a contraluz.',
    location: 'Zapopan. Guadalajara. México.',
    date: '2026',
    tags: ['Estudio', 'Contraluz', 'Ambiente']
  },
  {
    id: 'evento-13',
    fileName: 'event_DSCF5718.jpg',
    title: 'Car Show Base Aérea',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF5718.jpg',
    description: 'Fotografía de ambiente en encuentro de autos en Base Aérea.',
    location: 'Zapopan. Guadalajara. México.',
    date: '2026',
    tags: ['Car Show', 'Social', 'Base Aérea']
  },
  {
    id: 'evento-14',
    fileName: 'event_DSCF5768.jpg',
    title: 'Aspas',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF5768.jpg',
    description: 'Detalle aspas de helicóptero en evento de Base Aérea.',
    location: 'Zapopan. Guadalajara. México.',
    date: '2026',
    tags: ['Car Show', 'Helicóptero', 'Base Aérea']
  },
  {
    id: 'evento-15',
    fileName: 'event_R1-03268-0031.jpg',
    title: 'Crónica Documental Mariachis',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_R1-03268-0031.jpg',
    description: 'Fotografía con carácter fotoperiodístico y textura analógica.',
    location: 'Guadalajara Centro. México.',
    date: '2026',
    tags: ['Documental', 'Analógico', 'Mariachis']
  },
  {
    id: 'evento-16',
    fileName: 'event_DSCF5086.jpg',
    title: 'Fiesta & Calle',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF5086.jpg',
    description: 'Alegría danzante.',
    location: 'Tonalá',
    date: '2025',
    tags: ['Fiesta', 'Calle', 'Danza']
  },
   {
    id: 'evento-17',
    fileName: 'event_DSCF8740_01.jpg',
    title: 'runners',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF8740_01.jpg',
    description: 'fotos individuales de corredores.',
    location: 'Carrera contra el cáncer 2026',
    date: '2026',
    tags: ['Runners', 'Carrera', 'Deporte']
  },
   {
    id: 'evento-18',
    fileName: 'event_DSCF9386.jpg',
    title: 'skater MACBA',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF9386.jpg',
    description: 'skaters MACBA.',
    location: 'Barcelona',
    date: '2026',
    tags: ['SkateLife', 'Street', 'Urban']
  },
   {
    id: 'evento-19',
    fileName: 'event_DSCF9289_01.jpg',
    title: 'Carrer Ample - foto urbana / arquitectura',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF9289_01.jpg',
    description: 'Foto urbana de un lugar común en Barcelona para fotógrafos .',
    location: 'Barcelona',
    date: '2026',
    tags: ['Urban', 'Arquitectura', 'Cielo']
  },
   {
    id: 'evento-20',
    fileName: 'event_DSCF2760_01.jpg',
    title: 'luxemburg skate park',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF2760_01.jpg',
    description: 'Street photo skate park .',
    location: 'Luxemburgo',
    date: '2026',
    tags: ['Urban', 'Skatelife', 'Arcos']
  },
   {
    id: 'evento-21',
    fileName: 'event_DSCF2291_02.jpg',
    title: 'urban bike',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF2291_02.jpg',
    description: 'foto cenital ciclista en circuito urbano.',
    location: 'Lyon, Francia',
    date: '2026',
    tags: ['Urban', 'Bicicleta', 'Deporte']
  },
   {
    id: 'evento-22',
    fileName: 'event_DSCF7671_01.jpg',
    title: 'graffiti art santa chilla',
    category: 'eventos',
    categoryLabel: 'Eventos',
    imageUrl: IMAGE_BASE_PATH + 'event_DSCF7671_01.jpg',
    description: 'Grafitero ultimando su obra en el santa chilla fest.',
    location: 'Santa Cecilia, Oblatos. Guadalajara. México',
    date: '2026',
    tags: ['Urban', 'Graffiti', 'Festival']
  }
]; 

// Estado global de la galería
let activeFilter = 'todos';
let currentLightboxIndex = 0;
let filteredItems = [...GALLERY_ITEMS];

// Estado global de la calculadora
let selectedCalcCategory = 'retrato';
let currentHours = 2;
let currentPhotos = 15;
let selectedLocation = 'exterior';

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  setupFilterButtons();
  setupCalculator();
  setupLightbox();
  setupContactForm();
});

// Renderizar Galería
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  filteredItems = GALLERY_ITEMS.filter(item => {
    return activeFilter === 'todos' || item.category === activeFilter;
  });

  container.innerHTML = filteredItems.map((item, index) => {
    const escapedTitle = (item.title || '').replace(/'/g, "\\'");
    const placeholderSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'><rect width='100%' height='100%' fill='%23161616'/><circle cx='300' cy='180' r='36' fill='%23262626'/><text x='50%' y='43%' fill='%23a1a1aa' font-family='sans-serif' font-size='13' text-anchor='middle'>📷 ${item.fileName || 'Foto'}</text><text x='50%' y='53%' fill='%23ffffff' font-family='sans-serif' font-size='14' font-weight='600' text-anchor='middle'>${escapedTitle}</text><text x='50%' y='62%' fill='%2371717a' font-family='sans-serif' font-size='11' text-anchor='middle'>Carpeta: public/IMG/</text></svg>`;

    return `
      <div class="gallery-card" onclick="openLightbox(${index})">
        <img src="${item.imageUrl}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${placeholderSvg}';" />
        <div class="gallery-card-info">
          <span class="gallery-card-cat">${item.categoryLabel}</span>
          <h4 class="gallery-card-title">${item.title}</h4>
        </div>
      </div>
    `;
  }).join('');
}

// Filtros de categoría
function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');
      renderGallery();
    });
  });
}

// Lightbox Modal
function setupLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') modal.classList.remove('active');
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = filteredItems[index];
  if (!item) return;

  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');
  const loc = document.getElementById('lightbox-location');
  const cat = document.getElementById('lightbox-category');
  const counter = document.getElementById('lightbox-counter');

  if (img) {
    img.onerror = () => {
      img.onerror = null;
      img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'><rect width='100%' height='100%' fill='%23111111'/><circle cx='700' cy='400' r='54' fill='%23222222'/><text x='50%' y='47%' fill='%23ffffff' font-family='sans-serif' font-size='24' font-weight='600' text-anchor='middle'>${item.fileName || 'Fotografía de Alta Resolución'}</text><text x='50%' y='54%' fill='%23a1a1aa' font-family='sans-serif' font-size='16' text-anchor='middle'>Coloca este archivo en: public/IMG/${item.fileName || ''}</text></svg>`;
    };
    img.src = item.imageUrl;
  }
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (loc) loc.textContent = item.location;
  if (cat) cat.textContent = item.categoryLabel;
  if (counter) counter.textContent = `${index + 1} / ${filteredItems.length}`;

  if (modal) modal.classList.add('active');
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = filteredItems.length - 1;
  if (currentLightboxIndex >= filteredItems.length) currentLightboxIndex = 0;
  openLightbox(currentLightboxIndex);
}

// Calculadora Interactivas
function setupCalculator() {
  const categoryBtns = document.querySelectorAll('.calc-cat-btn');
  const locationBtns = document.querySelectorAll('.calc-loc-btn');
  const hoursSlider = document.getElementById('calc-hours');
  const hoursDisplay = document.getElementById('calc-hours-val');
  const photosSlider = document.getElementById('calc-photos');
  const photosDisplay = document.getElementById('calc-photos-val');
  const droneCheckbox = document.getElementById('calc-drone');
  const expressCheckbox = document.getElementById('calc-express');
  const albumCheckbox = document.getElementById('calc-album');
  const applyBtn = document.getElementById('btn-aplicar-cotizacion');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCalcCategory = btn.getAttribute('data-cat') || 'retrato';
      updateCalculator();
    });
  });

  locationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      locationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedLocation = btn.getAttribute('data-loc') || 'exterior';
      updateCalculator();
    });
  });

  if (hoursSlider && hoursDisplay) {
    hoursSlider.addEventListener('input', (e) => {
      currentHours = parseInt(e.target.value);
      hoursDisplay.textContent = `${currentHours} ${currentHours === 1 ? 'Hora' : 'Horas'}`;
      updateCalculator();
    });
  }

  if (photosSlider && photosDisplay) {
    photosSlider.addEventListener('input', (e) => {
      currentPhotos = parseInt(e.target.value);
      photosDisplay.textContent = `${currentPhotos} Fotos`;
      updateCalculator();
    });
  }

  if (droneCheckbox) droneCheckbox.addEventListener('change', updateCalculator);
  if (expressCheckbox) expressCheckbox.addEventListener('change', updateCalculator);
  if (albumCheckbox) albumCheckbox.addEventListener('change', updateCalculator);

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const msgField = document.getElementById('contact-message');
      const serviceSelect = document.getElementById('contact-service');
      const totalDisplay = document.getElementById('calc-total');

      if (serviceSelect) {
        if (selectedCalcCategory === 'retrato') serviceSelect.value = 'retrato';
        else if (selectedCalcCategory === 'automotriz') serviceSelect.value = 'automotriz';
        else if (selectedCalcCategory === 'eventos') serviceSelect.value = 'eventos';
      }

      if (msgField && totalDisplay) {
        msgField.value = `Hola Philippe, me interesa reservar una sesión fotográfica de ${selectedCalcCategory.toUpperCase()} con ${currentHours}h de cobertura, ${currentPhotos} fotos retocadas en locación ${selectedLocation.toUpperCase()} por un presupuesto estimado de ${totalDisplay.textContent}.`;
      }
    });
  }

  // Ejecutar cálculo inicial
  updateCalculator();
}

function updateCalculator() {
  const totalDisplay = document.getElementById('calc-total');
  if (!totalDisplay) return;

  let basePrice = 1250; // Retrato base
  if (selectedCalcCategory === 'automotriz') {
    basePrice = 1250;
  } else if (selectedCalcCategory === 'eventos') {
    basePrice = 2100;
  }

  const extraHoursCost = Math.max(0, currentHours - 1) * 900;
  const extraPhotosCost = Math.max(0, currentPhotos - 10) * 80;

  let locationCost = 0;
  if (selectedLocation === 'estudio') locationCost = 1100;
  if (selectedLocation === 'privada') locationCost = 950;

  let extrasTotal = 0;
  const droneCheckbox = document.getElementById('calc-drone');
  const expressCheckbox = document.getElementById('calc-express');
  const albumCheckbox = document.getElementById('calc-album');

  if (expressCheckbox && expressCheckbox.checked) extrasTotal += 1500;
  if (droneCheckbox && droneCheckbox.checked) extrasTotal += 2200;
  if (albumCheckbox && albumCheckbox.checked) extrasTotal += 4400;

  const total = basePrice + extraHoursCost + extraPhotosCost + locationCost + extrasTotal;

  // Formatear número con separadores de miles
  const formattedTotal = total.toLocaleString('es-MX');
  totalDisplay.textContent = `$${formattedTotal} MXN`;
}

// Formulario de Contacto
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-success-alert');
  const fallbackLink = document.getElementById('contact-mailto-fallback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name') || form.querySelector('input[type="text"]');
      const emailInput = document.getElementById('contact-email') || form.querySelector('input[type="email"]');
      const serviceSelect = document.getElementById('contact-service');
      const messageInput = document.getElementById('contact-message') || form.querySelector('textarea');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const serviceText = serviceSelect && serviceSelect.selectedIndex >= 0
        ? serviceSelect.options[serviceSelect.selectedIndex].text
        : 'Consulta general';
      const message = messageInput ? messageInput.value.trim() : '';

      const subject = `Nueva solicitud: ${serviceText}${name ? ' - ' + name : ''}`;
      const bodyLines = [
        'Hola Philippe,',
        '',
        'Te contacto desde el formulario de tu sitio web con los siguientes datos:',
        '',
        `Nombre: ${name}`,
        `Correo de respuesta: ${email}`,
        `Tipo de sesión / consulta: ${serviceText}`,
        '',
        'Mensaje:',
        message
      ];

      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      if (fallbackLink) {
        fallbackLink.setAttribute('href', mailtoUrl);
      }

      if (alertBox) {
        alertBox.style.display = 'block';
      }

      // Disparar apertura del programa de correo predeterminado sin usar window.open
      const tempLink = document.createElement('a');
      tempLink.href = mailtoUrl;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    });
  }
}
