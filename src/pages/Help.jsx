import { useState } from 'react'
import Notification from '../components/Notification'
import './Help.css'

function Help() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  const emergencyNumbers = [
    { name: 'Línea de Crisis 24/7', number: '1-800-273-8255', icon: '📞' },
    { name: 'Chat de Crisis', number: 'Envía "HOLA" al 741741', icon: '💬' },
    { name: 'Emergencias', number: '911', icon: '🏥' },
    { name: 'Centro Universitario', number: '555-0123', icon: '🏫' }
  ]

  const handleEmergencyCall = () => {
    setShowEmergencyModal(true)
  }

  const [notification, setNotification] = useState(null)

  const handleFindHelp = () => {
    setNotification({
      message: 'Buscando centros de ayuda cerca de ti... Centro de Salud Mental (0.5 km), Hospital Universitario (1.2 km), Clínica Psicológica (2.1 km)',
      type: 'info'
    })
  }

  return (
    <div className="help-page">
      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      {showEmergencyModal && (
        <div className="modal-overlay" onClick={() => setShowEmergencyModal(false)}>
          <div className="emergency-modal" onClick={e => e.stopPropagation()}>
            <h2>🚨 Líneas de Emergencia</h2>
            <div className="emergency-numbers">
              {emergencyNumbers.map((contact, index) => (
                <div key={index} className="emergency-item">
                  <span className="emergency-icon">{contact.icon}</span>
                  <div>
                    <h3>{contact.name}</h3>
                    <p className="phone-number">{contact.number}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-close-modal" onClick={() => setShowEmergencyModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      <header className="page-header">
        <button className="back-btn">←</button>
        <h1>Ayuda Profesional</h1>
      </header>

      <div className="help-content">
        <div className="info-card">
          <div className="card-icon">🛡️</div>
          <h2>Tu Bienestar y Privacidad son lo Primero</h2>
          <p>
            Hemos notado que podrías estar pasando por un momento difícil. Queremos asegurarte
            que tu privacidad es nuestra prioridad. Solo tú decides si quieres buscar ayuda o
            compartir información.
          </p>
          <a href="#" className="link-primary">
            Leer más sobre nuestra política de privacidad →
          </a>
        </div>

        <div className="emergency-section">
          <h3>¿Necesitas ayuda ahora?</h3>
          <button className="btn-emergency" onClick={handleEmergencyCall}>
            📞 Llamar a línea de emergencia
          </button>
          <button className="btn-secondary" onClick={handleFindHelp}>
            📍 Buscar ayuda cerca de mí
          </button>
        </div>

        <div className="resources-section">
          <h3>Información y Recursos</h3>
          <details className="accordion">
            <summary>Señales de que podrías necesitar ayuda</summary>
            <p>
              Sentimientos persistentes de tristeza, cambios drásticos en el sueño o apetito,
              dificultad para concentrarte y ansiedad que interfiere con tu día a día son algunas
              señales importantes a las que prestar atención.
            </p>
          </details>
          <details className="accordion">
            <summary>Tipos de apoyo disponibles</summary>
            <p>
              Contamos con psicólogos, consejeros académicos, grupos de apoyo y recursos en línea
              disponibles para ti.
            </p>
          </details>
          <details className="accordion">
            <summary>Cómo prepararte para tu primera sesión</summary>
            <p>
              Es normal sentir nervios. Piensa en qué te gustaría compartir y recuerda que no hay
              preguntas incorrectas.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Help
