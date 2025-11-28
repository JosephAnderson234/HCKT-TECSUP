// Datos de ejemplo para la aplicación

import chica1 from '../assets/images/chica1.webp'
import chico1 from '../assets/images/chico1.jpg'
import chica2 from '../assets/images/chica2.jpg'
import chico2 from '../assets/images/chico2.jpg'
import chica3 from '../assets/images/chica3.jpg'
import chico3 from '../assets/images/chico3.jpg'

export const professionals = [
  { 
    id: 1, 
    name: 'Ana Gómez', 
    role: 'Ing. de Software', 
    match: 95,
    bio: 'Especialista en desarrollo web y mentoría técnica. Me apasiona ayudar a estudiantes.',
    interests: ['Tecnología', 'Programación', 'Mentoría'],
    image: chica1
  },
  { 
    id: 2, 
    name: 'Carlos Ruiz', 
    role: 'Psicólogo', 
    match: 92,
    bio: 'Psicólogo clínico especializado en ansiedad y estrés académico.',
    interests: ['Salud Mental', 'Terapia', 'Mindfulness'],
    image: chico3
  },
  { 
    id: 3, 
    name: 'Sofía Castro', 
    role: 'Diseño Gráfico', 
    match: 88,
    bio: 'Diseñadora creativa con experiencia en UX/UI y branding.',
    interests: ['Diseño', 'Arte', 'Creatividad'],
    image: chica2
  },
  { 
    id: 4, 
    name: 'David Jiménez', 
    role: 'Medicina', 
    match: 85,
    bio: 'Estudiante de medicina con interés en salud mental y bienestar.',
    interests: ['Medicina', 'Salud', 'Investigación'],
    image: chico2
  },
  { 
    id: 5, 
    name: 'Laura Méndez', 
    role: 'Arquitectura', 
    match: 81,
    bio: 'Arquitecta apasionada por el diseño sostenible y espacios de bienestar.',
    interests: ['Arquitectura', 'Diseño', 'Sostenibilidad'],
    image: chica3
  },
  { 
    id: 6, 
    name: 'Juan Morales', 
    role: 'Derecho', 
    match: 77,
    bio: 'Estudiante de derecho enfocado en derechos humanos y justicia social.',
    interests: ['Derecho', 'Justicia', 'Activismo'],
    image: chico1
  }
]

export const events = [
  {
    id: 1,
    title: 'Hackathon de Innovación Tech',
    description: 'Únete al mayor evento de tecnología del campus y crea soluciones innovadoras.',
    tags: ['Tecnología', 'Competencia'],
    date: '15 Dic 2025',
    location: 'Auditorio Principal',
    image: 'tech'
  },
  {
    id: 2,
    title: 'Taller de Mindfulness',
    description: 'Aprende técnicas de meditación y manejo del estrés.',
    tags: ['Bienestar', 'Salud Mental'],
    date: '18 Dic 2025',
    location: 'Centro de Bienestar',
    image: 'wellness'
  },
  {
    id: 3,
    title: 'Grupo de Estudio: Exámenes Finales',
    description: 'Sesión colaborativa de estudio para preparar los exámenes finales.',
    tags: ['Académico', 'Grupo'],
    date: '20 Dic 2025',
    location: 'Biblioteca',
    image: 'study'
  }
]

export const resources = [
  {
    id: 1,
    title: 'Guía de Bienestar Mental',
    description: 'Recursos y técnicas para manejar el estrés académico.',
    tags: ['Salud Mental'],
    type: 'Guía'
  },
  {
    id: 2,
    title: 'Técnicas de Estudio Efectivas',
    description: 'Mejora tu productividad con métodos comprobados.',
    tags: ['Académico'],
    type: 'Tutorial'
  },
  {
    id: 3,
    title: 'Ejercicios de Respiración',
    description: 'Calma la ansiedad con ejercicios simples de respiración.',
    tags: ['Bienestar'],
    type: 'Video'
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
