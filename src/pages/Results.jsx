import { useState } from 'react'
import Notification from '../components/Notification'
import { professionals } from '../data/mockData'
import './Results.css'

function Results() {
  const [showModal, setShowModal] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [message, setMessage] = useState('')
  const [sentRequests, setSentRequests] = useState([])
  const [notification, setNotification] = useState(null)

  const profiles = professionals

  const openModal = (profile) => {
    setSelectedProfile(profile)
    setMessage(`¡Hola ${profile.name.split(' ')[0]}! Me gustaría conectar contigo porque...`)
    setShowModal(true)
  }

  const sendRequest = () => {
    if (message.trim() && selectedProfile) {
      setSentRequests([...sentRequests, selectedProfile.id])
      setShowModal(false)
      
      // Vibración de éxito
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50])
      }
      
      setNotification({
        message: `¡Solicitud enviada a ${selectedProfile.name}! Te notificaremos cuando responda.`,
        type: 'success'
      })
      
      setMessage('')
    }
  }

  return (
    <div className="results-page">
      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <header className="results-header">
        <div className="header-tabs">
          <span className="tab active">Apoyo</span>
          <span className="tab">Vista</span>
        </div>
        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''} 
            onClick={() => setViewMode('grid')}
          >
            ⊞
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''} 
            onClick={() => setViewMode('list')}
          >
            ☰
          </button>
        </div>
      </header>

      <h1 className="results-title">Resultados</h1>

      <div className={`profiles-grid ${viewMode}`}>
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="profile-image">
              <img src={profile.image} alt={profile.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <span className="match-badge">{profile.match}% Match</span>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <button 
              className={`btn-profile ${sentRequests.includes(profile.id) ? 'sent' : ''}`}
              onClick={() => openModal(profile)}
              disabled={sentRequests.includes(profile.id)}
            >
              {sentRequests.includes(profile.id) ? '✓ Solicitud Enviada' : 'Ver Perfil'}
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedProfile && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Conectar con {selectedProfile.name}</h2>
            <p className="modal-subtitle">
              Envía un mensaje presentándote y explicando por qué te gustaría conectar.
            </p>
            <textarea 
              placeholder={`¡Hola ${selectedProfile.name.split(' ')[0]}! Me gustaría conectar contigo porque...`}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className="btn-send" onClick={sendRequest}>
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Results
