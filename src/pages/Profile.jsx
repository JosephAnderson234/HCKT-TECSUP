import { useState } from 'react'
import './Profile.css'

function Profile() {
  const [anonymousMode, setAnonymousMode] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [showToast, setShowToast] = useState(false)

  const showNotification = (message) => {
    setShowToast(message)
    setTimeout(() => setShowToast(false), 2000)
  }

  const handleToggle = (setter, value, name) => {
    setter(!value)
    showNotification(`${name} ${!value ? 'activado' : 'desactivado'}`)
  }

  return (
    <div className="profile-page">
      {showToast && <div className="toast">{showToast}</div>}
      <header className="page-header">
        <button className="back-btn">←</button>
        <h1>Perfil y Configuración</h1>
      </header>

      <div className="profile-section">
        <div className="profile-avatar">
          <div className="avatar-large">👤</div>
          <button className="edit-badge">✏️</button>
        </div>
        <h2>Alex Doe</h2>
        <p className="email">alex.doe@university.com</p>
        <button className="btn-primary">Editar Perfil</button>
      </div>

      <div className="settings-section">
        <h3>CUENTA</h3>
        <div className="setting-item">
          <span className="icon">🔒</span>
          <span>Cambiar contraseña</span>
          <span className="arrow">›</span>
        </div>
        <div className="setting-item">
          <span className="icon">👥</span>
          <span>Gestionar cuenta</span>
          <span className="arrow">›</span>
        </div>
      </div>

      <div className="settings-section">
        <h3>PRIVACIDAD Y SEGURIDAD</h3>
        <div className="setting-item">
          <span className="icon">🛡️</span>
          <span>Modo de Chat Anónimo</span>
          <label className="toggle">
            <input 
              type="checkbox" 
              checked={anonymousMode}
              onChange={() => handleToggle(setAnonymousMode, anonymousMode, 'Modo Anónimo')}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span className="icon">🚫</span>
          <span>Contactos bloqueados</span>
          <span className="arrow">›</span>
        </div>
      </div>

      <div className="settings-section">
        <h3>NOTIFICACIONES</h3>
        <div className="setting-item">
          <span className="icon">🔔</span>
          <span>Notificaciones Push</span>
          <label className="toggle">
            <input 
              type="checkbox" 
              checked={pushNotifications}
              onChange={() => handleToggle(setPushNotifications, pushNotifications, 'Notificaciones')}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span className="icon">⚙️</span>
          <span>Preferencias</span>
          <span className="arrow">›</span>
        </div>
      </div>

      <div className="settings-section">
        <h3>AYUDA Y SOPORTE</h3>
        <div className="setting-item">
          <span className="icon">❓</span>
          <span>Preguntas Frecuentes (FAQ)</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
