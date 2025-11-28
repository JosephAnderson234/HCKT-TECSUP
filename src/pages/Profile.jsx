import { useState } from 'react'
import { userStats, notifications } from '../data/mockData'
import './Profile.css'

function Profile() {
  const [anonymousMode, setAnonymousMode] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [showToast, setShowToast] = useState(false)
  const [activeTab, setActiveTab] = useState('settings')

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
        <h1>Mi Perfil</h1>
      </header>

      <div className="profile-section">
        <div className="profile-avatar">
          <div className="avatar-large">👤</div>
          <button className="edit-badge">✏️</button>
        </div>
        <h2>Alex Doe</h2>
        <p className="email">alex.doe@university.com</p>
        <p className="join-date">Miembro desde {userStats.joinDate}</p>
      </div>

      <div className="tabs-container">
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          📊 Estadísticas
        </button>
        <button 
          className={`tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
          onClick={() => setActiveTab('badges')}
        >
          🏆 Logros
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Ajustes
        </button>
      </div>

      {activeTab === 'stats' && (
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">💬</div>
            <div className="stat-info">
              <h3>{userStats.sessionsCompleted}</h3>
              <p>Sesiones Completadas</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <h3>{userStats.hoursOfSupport}h</h3>
              <p>Horas de Apoyo</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <h3>{userStats.resourcesViewed}</h3>
              <p>Recursos Vistos</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>{userStats.connectionsActive}</h3>
              <p>Conexiones Activas</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <h3>{userStats.eventsAttended}</h3>
              <p>Eventos Asistidos</p>
            </div>
          </div>
          
          <div className="stat-card highlight">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <h3>{userStats.streak} días</h3>
              <p>Racha Actual</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'badges' && (
        <div className="badges-container">
          <h3 className="section-title">Tus Logros</h3>
          <div className="badges-grid">
            {userStats.badges.map(badge => (
              <div key={badge.id} className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
                <div className="badge-icon">{badge.icon}</div>
                <h4>{badge.name}</h4>
                {!badge.earned && <div className="lock-overlay">🔒</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="settings-container">

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
        <div className="setting-item">
          <span className="icon">📧</span>
          <span>Contactar Soporte</span>
          <span className="arrow">›</span>
        </div>
        <div className="setting-item">
          <span className="icon">📄</span>
          <span>Términos y Condiciones</span>
          <span className="arrow">›</span>
        </div>
      </div>
      
      <div className="settings-section">
        <h3>SESIÓN</h3>
        <div className="setting-item danger">
          <span className="icon">🚪</span>
          <span>Cerrar Sesión</span>
          <span className="arrow">›</span>
        </div>
      </div>
        </div>
      )}
    </div>
  )
}

export default Profile
