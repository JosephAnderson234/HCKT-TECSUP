// Datos de ejemplo para la aplicación

// Imágenes de perfiles
import chica1 from '../assets/images/chica1.webp'
import chico1 from '../assets/images/chico1.jpg'
import chica2 from '../assets/images/chica2.jpg'
import chico2 from '../assets/images/chico2.jpg'
import chica3 from '../assets/images/chica3.jpg'
import chico3 from '../assets/images/chico3.jpg'

// Imágenes de eventos
import hackathonImg from '../assets/images/hckt.jpg'
import tallerMindfulnessImg from '../assets/images/taller_mindfulness.webp'
import grupoEstudioImg from '../assets/images/grupo_de_estudio.jpg'
import yogaImg from '../assets/images/yoga_para_estudiantes.jpeg'
import charlaAnsiedadImg from '../assets/images/charla_manejo_ansiedad.jpg'
import grupoApoyoImg from '../assets/images/grupo_de_apoyo.jpg'
import maratonProgramacionImg from '../assets/images/maraton_en_programacion.jpeg'
import clubLecturaImg from '../assets/images/club_lectura.avif'

// Imágenes de recursos
import bienestarMentalImg from '../assets/images/bienestar_mental.jpg'
import tecnicasEstudioImg from '../assets/images/tecnicas_de_estudio.jpeg'
import ejercicioRespiracionImg from '../assets/images/ejercicio_respiracion.jpg'
import metodoPomodoroImg from '../assets/images/metodo_pomodoro.png'
import guiaDormirImg from '../assets/images/guia_para_dormir.jpg'
import sindromeImpostorImg from '../assets/images/sindomre_del_impostor.webp'

export const professionals = [
  { 
    id: 1, 
    name: 'Ana Gómez', 
    role: 'Ing. de Software', 
    match: 95,
    bio: 'Especialista en desarrollo web y mentoría técnica. Me apasiona ayudar a estudiantes.',
    interests: ['Tecnología', 'Programación', 'Mentoría'],
    image: chica1,
    specialty: 'Desarrollo Web & Mentoría',
    experience: '5 años',
    availability: 'Lunes a Viernes, 14:00-18:00',
    rating: 4.9,
    reviews: 127,
    languages: ['Español', 'Inglés'],
    verified: true,
    responseTime: '< 2 horas'
  },
  { 
    id: 2, 
    name: 'Carlos Ruiz', 
    role: 'Psicólogo', 
    match: 92,
    bio: 'Psicólogo clínico especializado en ansiedad y estrés académico.',
    interests: ['Salud Mental', 'Terapia', 'Mindfulness'],
    image: chico3,
    specialty: 'Ansiedad & Estrés Académico',
    experience: '8 años',
    availability: 'Martes y Jueves, 10:00-16:00',
    rating: 5.0,
    reviews: 203,
    languages: ['Español'],
    verified: true,
    responseTime: '< 1 hora'
  },
  { 
    id: 3, 
    name: 'Sofía Castro', 
    role: 'Diseño Gráfico', 
    match: 88,
    bio: 'Diseñadora creativa con experiencia en UX/UI y branding.',
    interests: ['Diseño', 'Arte', 'Creatividad'],
    image: chica2,
    specialty: 'UX/UI & Branding',
    experience: '4 años',
    availability: 'Lunes, Miércoles, Viernes, 15:00-19:00',
    rating: 4.8,
    reviews: 89,
    languages: ['Español', 'Inglés', 'Francés'],
    verified: true,
    responseTime: '< 3 horas'
  },
  { 
    id: 4, 
    name: 'David Jiménez', 
    role: 'Medicina', 
    match: 85,
    bio: 'Estudiante de medicina con interés en salud mental y bienestar.',
    interests: ['Medicina', 'Salud', 'Investigación'],
    image: chico2,
    specialty: 'Salud Mental & Bienestar',
    experience: '3 años',
    availability: 'Fines de semana, 10:00-14:00',
    rating: 4.7,
    reviews: 56,
    languages: ['Español', 'Inglés'],
    verified: false,
    responseTime: '< 4 horas'
  },
  { 
    id: 5, 
    name: 'Laura Méndez', 
    role: 'Arquitectura', 
    match: 81,
    bio: 'Arquitecta apasionada por el diseño sostenible y espacios de bienestar.',
    interests: ['Arquitectura', 'Diseño', 'Sostenibilidad'],
    image: chica3,
    specialty: 'Diseño Sostenible',
    experience: '6 años',
    availability: 'Lunes a Viernes, 09:00-13:00',
    rating: 4.6,
    reviews: 72,
    languages: ['Español'],
    verified: true,
    responseTime: '< 5 horas'
  },
  { 
    id: 6, 
    name: 'Juan Morales', 
    role: 'Derecho', 
    match: 77,
    bio: 'Estudiante de derecho enfocado en derechos humanos y justicia social.',
    interests: ['Derecho', 'Justicia', 'Activismo'],
    image: chico1,
    specialty: 'Derechos Humanos',
    experience: '2 años',
    availability: 'Martes y Jueves, 16:00-20:00',
    rating: 4.5,
    reviews: 34,
    languages: ['Español', 'Portugués'],
    verified: false,
    responseTime: '< 6 horas'
  }
]

export const events = [
  {
    id: 1,
    title: 'Hackathon de Innovación Tech',
    description: 'Únete al mayor evento de tecnología del campus y crea soluciones innovadoras.',
    tags: ['Tecnología', 'Competencia'],
    date: '15 Dic 2025',
    time: '09:00 - 21:00',
    location: 'Auditorio Principal',
    image: hackathonImg,
    type: 'event',
    attendees: 156,
    capacity: 200,
    organizer: 'Club de Tecnología',
    price: 'Gratis'
  },
  {
    id: 2,
    title: 'Taller de Mindfulness',
    description: 'Aprende técnicas de meditación y manejo del estrés.',
    tags: ['Bienestar', 'Salud Mental'],
    date: '18 Dic 2025',
    time: '16:00 - 18:00',
    location: 'Centro de Bienestar',
    image: tallerMindfulnessImg,
    type: 'event',
    attendees: 23,
    capacity: 30,
    organizer: 'Servicios de Salud Mental',
    price: 'Gratis'
  },
  {
    id: 3,
    title: 'Grupo de Estudio: Exámenes Finales',
    description: 'Sesión colaborativa de estudio para preparar los exámenes finales.',
    tags: ['Académico', 'Grupo'],
    date: '20 Dic 2025',
    time: '14:00 - 18:00',
    location: 'Biblioteca',
    image: grupoEstudioImg,
    type: 'group',
    attendees: 12,
    capacity: 15,
    organizer: 'María González',
    price: 'Gratis'
  },
  {
    id: 4,
    title: 'Sesión de Yoga para Estudiantes',
    description: 'Relájate y reduce el estrés con una sesión de yoga guiada.',
    tags: ['Bienestar', 'Ejercicio'],
    date: '16 Dic 2025',
    time: '07:00 - 08:00',
    location: 'Gimnasio Universitario',
    image: yogaImg,
    type: 'event',
    attendees: 34,
    capacity: 40,
    organizer: 'Club de Deportes',
    price: 'Gratis'
  },
  {
    id: 5,
    title: 'Charla: Manejo de la Ansiedad',
    description: 'Psicólogos expertos comparten estrategias para manejar la ansiedad académica.',
    tags: ['Salud Mental', 'Educativo'],
    date: '17 Dic 2025',
    time: '18:00 - 20:00',
    location: 'Sala de Conferencias B',
    image: charlaAnsiedadImg,
    type: 'event',
    attendees: 67,
    capacity: 100,
    organizer: 'Dpto. de Psicología',
    price: 'Gratis'
  },
  {
    id: 6,
    title: 'Grupo de Apoyo: Ansiedad Social',
    description: 'Espacio seguro para compartir experiencias y estrategias de afrontamiento.',
    tags: ['Salud Mental', 'Grupo'],
    date: '19 Dic 2025',
    time: '17:00 - 18:30',
    location: 'Centro de Bienestar - Sala 3',
    image: grupoApoyoImg,
    type: 'group',
    attendees: 8,
    capacity: 12,
    organizer: 'Dr. Carlos Ruiz',
    price: 'Gratis'
  },
  {
    id: 7,
    title: 'Maratón de Programación Python',
    description: 'Aprende Python desde cero en una sesión intensiva de 6 horas.',
    tags: ['Tecnología', 'Educativo'],
    date: '21 Dic 2025',
    time: '10:00 - 16:00',
    location: 'Lab de Computación 2',
    image: maratonProgramacionImg,
    type: 'event',
    attendees: 45,
    capacity: 50,
    organizer: 'Ana Gómez',
    price: 'Gratis'
  },
  {
    id: 8,
    title: 'Club de Lectura: Desarrollo Personal',
    description: 'Discusión mensual sobre libros de crecimiento personal y bienestar.',
    tags: ['Bienestar', 'Grupo'],
    date: '22 Dic 2025',
    time: '15:00 - 16:30',
    location: 'Biblioteca - Sala de Lectura',
    image: clubLecturaImg,
    type: 'group',
    attendees: 15,
    capacity: 20,
    organizer: 'Club Literario',
    price: 'Gratis'
  }
]

export const resources = [
  {
    id: 1,
    title: 'Guía de Bienestar Mental',
    description: 'Recursos y técnicas para manejar el estrés académico.',
    tags: ['Salud Mental'],
    type: 'Guía',
    duration: '15 min lectura',
    rating: 4.8,
    views: 2341,
    author: 'Dpto. de Psicología',
    image: bienestarMentalImg
  },
  {
    id: 2,
    title: 'Técnicas de Estudio Efectivas',
    description: 'Mejora tu productividad con métodos comprobados.',
    tags: ['Académico'],
    type: 'Tutorial',
    duration: '20 min lectura',
    rating: 4.6,
    views: 1876,
    author: 'Centro de Aprendizaje',
    image: tecnicasEstudioImg
  },
  {
    id: 3,
    title: 'Ejercicios de Respiración',
    description: 'Calma la ansiedad con ejercicios simples de respiración.',
    tags: ['Bienestar'],
    type: 'Video',
    duration: '8 min',
    rating: 4.9,
    views: 3102,
    author: 'Centro de Bienestar',
    image: ejercicioRespiracionImg
  },
  {
    id: 4,
    title: 'Método Pomodoro para Estudiar',
    description: 'Técnica de gestión del tiempo para maximizar la concentración.',
    tags: ['Académico', 'Productividad'],
    type: 'Tutorial',
    duration: '12 min lectura',
    rating: 4.7,
    views: 1543,
    author: 'Ana Gómez',
    image: metodoPomodoroImg
  },
  {
    id: 5,
    title: 'Meditación Guiada para Dormir',
    description: 'Audio de meditación para mejorar la calidad del sueño.',
    tags: ['Bienestar', 'Sueño'],
    type: 'Audio',
    duration: '25 min',
    rating: 4.9,
    views: 2789,
    author: 'Dr. Carlos Ruiz',
    image: guiaDormirImg
  },
  {
    id: 6,
    title: 'Cómo Superar el Síndrome del Impostor',
    description: 'Estrategias para reconocer y combatir el síndrome del impostor.',
    tags: ['Salud Mental', 'Desarrollo Personal'],
    type: 'Artículo',
    duration: '18 min lectura',
    rating: 4.8,
    views: 2156,
    author: 'Dpto. de Psicología',
    image: sindromeImpostorImg
  }
]

export const botResponses = [
  'Entiendo cómo te sientes. Es completamente normal sentirse así.',
  'Gracias por compartir eso conmigo. ¿Hay algo específico que te gustaría explorar más?',
  'Eso suena difícil. Recuerda que no estás solo en esto.',
  'Es valiente de tu parte hablar sobre esto. ¿Cómo puedo apoyarte mejor?',
  'Tus sentimientos son válidos. ¿Has pensado en hablar con alguien profesional?',
  'Me alegra que estés compartiendo esto. El primer paso es reconocer cómo te sientes.',
  'Entiendo. A veces ayuda tomar las cosas un día a la vez. ¿Qué te parece?',
  'Eso debe ser muy estresante. ¿Qué estrategias has probado hasta ahora?',
  'Aprecio tu honestidad. ¿Te gustaría que te sugiera algunos recursos que podrían ayudarte?',
  'Es importante cuidar de tu salud mental. ¿Has considerado tomar un descanso?'
]

export const quickReplies = [
  '😰 Me siento ansioso/a',
  '😔 Estoy triste',
  '😫 Estoy estresado/a',
  '😴 Tengo problemas para dormir',
  '🤯 Me siento abrumado/a',
  '😞 Baja autoestima',
  '🎓 Presión académica',
  '👥 Problemas sociales'
]

export const chatSuggestions = [
  '¿Cómo puedo manejar el estrés de los exámenes?',
  'Necesito técnicas de relajación',
  'Me cuesta concentrarme',
  '¿Qué hago si tengo ansiedad?',
  'Quiero hablar con un profesional'
]

export const emergencyContacts = [
  {
    name: 'Línea de Crisis 24/7',
    number: '1-800-273-8255',
    icon: '📞',
    description: 'Apoyo inmediato para crisis emocionales'
  },
  {
    name: 'Chat de Crisis',
    number: 'Envía "HOLA" al 741741',
    icon: '💬',
    description: 'Chat confidencial con consejeros capacitados'
  },
  {
    name: 'Emergencias',
    number: '911',
    icon: '🏥',
    description: 'Para emergencias médicas inmediatas'
  },
  {
    name: 'Centro de Salud Mental Universitario',
    number: '555-0123',
    icon: '🏫',
    description: 'Servicios de consejería para estudiantes'
  }
]

export const helpResources = [
  {
    title: 'Señales de que podrías necesitar ayuda',
    content: 'Sentimientos persistentes de tristeza, cambios drásticos en el sueño o apetito, dificultad para concentrarte y ansiedad que interfiere con tu día a día son algunas señales importantes a las que prestar atención.'
  },
  {
    title: 'Tipos de apoyo disponibles',
    content: 'Contamos con psicólogos, consejeros académicos, grupos de apoyo y recursos en línea disponibles para ti. Todos los servicios son confidenciales y gratuitos para estudiantes.'
  },
  {
    title: 'Cómo prepararte para tu primera sesión',
    content: 'Es normal sentir nervios. Piensa en qué te gustaría compartir y recuerda que no hay preguntas incorrectas. El terapeuta está ahí para escucharte sin juzgar.'
  },
  {
    title: 'Técnicas de manejo del estrés',
    content: 'Respiración profunda, ejercicio regular, sueño adecuado, y hablar con amigos o profesionales son estrategias efectivas. Encuentra lo que funciona mejor para ti.'
  },
  {
    title: 'Recursos en línea',
    content: 'Aplicaciones de meditación, foros de apoyo, videos educativos y artículos sobre salud mental están disponibles 24/7 en nuestro portal estudiantil.'
  }
]

export const userStats = {
  sessionsCompleted: 12,
  hoursOfSupport: 8.5,
  resourcesViewed: 23,
  connectionsActive: 4,
  eventsAttended: 7,
  streak: 5,
  joinDate: 'Septiembre 2025',
  badges: [
    { id: 1, name: 'Primera Sesión', icon: '🎯', earned: true },
    { id: 2, name: 'Semana Activa', icon: '🔥', earned: true },
    { id: 3, name: 'Explorador', icon: '🗺️', earned: true },
    { id: 4, name: 'Comunicador', icon: '💬', earned: false },
    { id: 5, name: 'Mentor', icon: '🌟', earned: false }
  ]
}

export const notifications = [
  {
    id: 1,
    type: 'message',
    title: 'Nuevo mensaje de Carlos Ruiz',
    message: 'Hola, gracias por tu mensaje. Podemos agendar una sesión...',
    time: 'Hace 5 min',
    read: false,
    icon: '💬'
  },
  {
    id: 2,
    type: 'event',
    title: 'Recordatorio: Hackathon mañana',
    message: 'El evento comienza a las 09:00 en el Auditorio Principal',
    time: 'Hace 2 horas',
    read: false,
    icon: '📅'
  },
  {
    id: 3,
    type: 'achievement',
    title: '¡Nuevo logro desbloqueado!',
    message: 'Has ganado la insignia "Semana Activa"',
    time: 'Hace 1 día',
    read: true,
    icon: '🏆'
  },
  {
    id: 4,
    type: 'resource',
    title: 'Nuevo recurso disponible',
    message: 'Se ha publicado "Guía de Manejo del Estrés"',
    time: 'Hace 2 días',
    read: true,
    icon: '📚'
  }
]

export const upcomingEvents = [
  {
    id: 1,
    title: 'Sesión con Carlos Ruiz',
    date: '2025-12-16',
    time: '14:00',
    type: 'session',
    location: 'Centro de Bienestar'
  },
  {
    id: 2,
    title: 'Hackathon de Innovación',
    date: '2025-12-15',
    time: '09:00',
    type: 'event',
    location: 'Auditorio Principal'
  },
  {
    id: 3,
    title: 'Grupo de Estudio',
    date: '2025-12-20',
    time: '14:00',
    type: 'group',
    location: 'Biblioteca'
  }
]

export const moodTracker = [
  { date: '2025-12-01', mood: 4, note: 'Buen día' },
  { date: '2025-12-02', mood: 3, note: 'Un poco estresado' },
  { date: '2025-12-03', mood: 5, note: 'Excelente' },
  { date: '2025-12-04', mood: 2, note: 'Día difícil' },
  { date: '2025-12-05', mood: 4, note: 'Mejor' },
  { date: '2025-12-06', mood: 4, note: 'Estable' },
  { date: '2025-12-07', mood: 3, note: 'Regular' }
]

export const wellnessTips = [
  {
    id: 1,
    title: 'Respira profundamente',
    description: 'Toma 5 respiraciones profundas cuando te sientas abrumado.',
    icon: '🫁',
    category: 'Respiración'
  },
  {
    id: 2,
    title: 'Toma descansos',
    description: 'Cada 50 minutos de estudio, descansa 10 minutos.',
    icon: '⏰',
    category: 'Productividad'
  },
  {
    id: 3,
    title: 'Hidrátate',
    description: 'Bebe al menos 8 vasos de agua al día.',
    icon: '💧',
    category: 'Salud'
  },
  {
    id: 4,
    title: 'Muévete',
    description: '30 minutos de ejercicio diario mejoran tu estado de ánimo.',
    icon: '🏃',
    category: 'Ejercicio'
  },
  {
    id: 5,
    title: 'Duerme bien',
    description: 'Intenta dormir 7-8 horas cada noche.',
    icon: '😴',
    category: 'Sueño'
  },
  {
    id: 6,
    title: 'Conecta con otros',
    description: 'Habla con amigos o familiares regularmente.',
    icon: '👥',
    category: 'Social'
  }
]

export const faqs = [
  {
    id: 1,
    question: '¿Es confidencial el servicio?',
    answer: 'Sí, todas las conversaciones y sesiones son completamente confidenciales. Solo compartimos información si hay riesgo inmediato para tu seguridad o la de otros.'
  },
  {
    id: 2,
    question: '¿Cuánto cuesta el servicio?',
    answer: 'Todos los servicios son gratuitos para estudiantes activos de la universidad. Esto incluye sesiones con profesionales, acceso a recursos y participación en eventos.'
  },
  {
    id: 3,
    question: '¿Cómo agendo una sesión?',
    answer: 'Puedes agendar una sesión desde la sección de Resultados, seleccionando un profesional y enviando una solicitud de conexión. Ellos responderán en menos de 24 horas.'
  },
  {
    id: 4,
    question: '¿Qué hago en una emergencia?',
    answer: 'Si estás en crisis, usa los contactos de emergencia en la sección de Ayuda. Hay líneas disponibles 24/7 para apoyo inmediato.'
  },
  {
    id: 5,
    question: '¿Puedo usar el servicio de forma anónima?',
    answer: 'Sí, puedes activar el modo anónimo en tu perfil. Tu identidad no será visible para otros usuarios, aunque los profesionales necesitarán información básica para las sesiones.'
  }
]
