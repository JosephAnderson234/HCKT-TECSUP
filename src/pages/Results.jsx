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
  const [filterSpecialty, setFilterSpecialty] = useState('Todos')
  const [sortBy, setSortBy] = useState('match')
  const [showProfileDetails, setShowProfileDetails] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const specialties = ['Todos', 'Psicólogo', 'Ing. de Software', 'Diseño Gráfico', 'Medicina', 'Arquitectura', 'Derecho']
  
  const getSpecialtyIcon = (specialty) => {
    const icons = {
      'Todos': '👥',
      'Psicólogo': '🧠',
      'Ing. de Software': '💻',
      'Diseño Gráfico': '🎨',
      'Medicina': '⚕️',
      'Arquitectura': '🏛️',
      'Derecho': '⚖️'
    }
    return icons[specialty] || '👤'
  }
  
  const filteredProfiles = professionals
    .filter(p => {
      const matchesSpecialty = filterSpecialty === 'Todos' || p.role === filterSpecialty
      const matchesSearch = searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSpecialty && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'match') return b.match - a.match
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
    })

  const profiles = filteredProfiles

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
        <div className="header-top">
          <h1 className="results-title">Profesionales</h1>
          <div className="view-toggle">
            <button 
              className={viewMode === 'grid' ? 'active' : ''} 
              onClick={() => setViewMode('grid')}
              title="Vista de cuadrícula"
            >
              ⊞
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''} 
              onClick={() => setViewMode('list')}
              title="Vista de lista"
            >
              ☰
            </button>
          </div>
        </div>
        
        <div className="search-filter-section">
          <div className="search-bar-results">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar por nombre o especialidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
        
        <div className="specialty-chips">
          {specialties.map(spec => (
            <button
              key={spec}
              className={`specialty-chip ${filterSpecialty === spec ? 'active' : ''}`}
              onClick={() => setFilterSpecialty(spec)}
            >
              {getSpecialtyIcon(spec)} {spec}
            </button>
          ))}
        </div>
        
        <div className="filters-bar">
          <div className="sort-group">
            <span className="sort-label">Ordenar:</span>
            <div className="sort-buttons">
              <button 
                className={`sort-btn ${sortBy === 'match' ? 'active' : ''}`}
                onClick={() => setSortBy('match')}
              >
                🎯 Match
              </button>
              <button 
                className={`sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
                onClick={() => setSortBy('rating')}
              >
                ⭐ Rating
              </button>
              <button 
                className={`sort-btn ${sortBy === 'reviews' ? 'active' : ''}`}
                onClick={() => setSortBy('reviews')}
              >
                💬 Reseñas
              </button>
            </div>
          </div>
          
          <div className="results-count">
            {profiles.length} {profiles.length === 1 ? 'profesional' : 'profesionales'}
          </div>
        </div>
      </header>

      {profiles.length > 0 ? (
        <div className={`profiles-grid ${viewMode}`}>
          {profiles.map(profile => (
            <div key={profile.id} className="profile-card">
              <div className="profile-image">
                <img src={profile.image} alt={profile.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                {profile.verified && <span className="verified-badge">✓</span>}
              </div>
              <span className="match-badge">{profile.match}% Match</span>
              
              <div className="profile-content">
                <h3>{profile.name}</h3>
                <p className="profile-role">{profile.role}</p>
                <p className="profile-specialty">{profile.specialty}</p>
                
                <div className="profile-stats">
                  <span className="stat">⭐ {profile.rating}</span>
                  <span className="stat">💬 {profile.reviews}</span>
                  <span className="stat">⏱️ {profile.responseTime}</span>
                </div>
                
                <div className="profile-tags">
                  {profile.interests.slice(0, 2).map((interest, idx) => (
                    <span key={idx} className="tag-small">{interest}</span>
                  ))}
                </div>
                
                <div className="profile-actions">
                  <button 
                    className="btn-view-profile"
                    onClick={() => setShowProfileDetails(profile)}
                  >
                    Ver Perfil
                  </button>
                  <button 
                    className={`btn-connect ${sentRequests.includes(profile.id) ? 'sent' : ''}`}
                    onClick={() => openModal(profile)}
                    disabled={sentRequests.includes(profile.id)}
                  >
                    {sentRequests.includes(profile.id) ? '✓ Enviado' : 'Conectar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state-results">
          <span className="empty-icon">🔍</span>
          <h3>No se encontraron profesionales</h3>
          <p>
            {searchQuery 
              ? `No hay resultados para "${searchQuery}"`
              : `No hay profesionales en la especialidad "${filterSpecialty}"`
            }
          </p>
          <button 
            className="btn-reset-filters"
            onClick={() => {
              setSearchQuery('')
              setFilterSpecialty('Todos')
            }}
          >
            Limpiar Filtros
          </button>
        </div>
      )}

      {showProfileDetails && (
        <div className="modal-overlay" onClick={() => setShowProfileDetails(null)}>
          <div className="modal profile-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowProfileDetails(null)}>×</button>
            
            <div className="profile-modal-header">
              <div className="profile-modal-image">
                <img src={showProfileDetails.image} alt={showProfileDetails.name} />
                {showProfileDetails.verified && <span className="verified-badge-large">✓ Verificado</span>}
              </div>
              <div className="profile-modal-info">
                <h2>{showProfileDetails.name}</h2>
                <p className="role">{showProfileDetails.role}</p>
                <div className="rating-section">
                  <span className="rating">⭐ {showProfileDetails.rating}</span>
                  <span className="reviews">({showProfileDetails.reviews} reseñas)</span>
                </div>
              </div>
            </div>
            
            <div className="profile-modal-content">
              <div className="info-section">
                <h4>📋 Especialidad</h4>
                <p>{showProfileDetails.specialty}</p>
              </div>
              
              <div className="info-section">
                <h4>💼 Experiencia</h4>
                <p>{showProfileDetails.experience}</p>
              </div>
              
              <div className="info-section">
                <h4>📝 Sobre mí</h4>
                <p>{showProfileDetails.bio}</p>
              </div>
              
              <div className="info-section">
                <h4>🕐 Disponibilidad</h4>
                <p>{showProfileDetails.availability}</p>
              </div>
              
              <div className="info-section">
                <h4>⏱️ Tiempo de respuesta</h4>
                <p>{showProfileDetails.responseTime}</p>
              </div>
              
              <div className="info-section">
                <h4>🌐 Idiomas</h4>
                <p>{showProfileDetails.languages.join(', ')}</p>
              </div>
              
              <div className="info-section">
                <h4>🏷️ Áreas de interés</h4>
                <div className="interests-list">
                  {showProfileDetails.interests.map((interest, idx) => (
                    <span key={idx} className="interest-tag">{interest}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn-primary"
                onClick={() => {
                  setShowProfileDetails(null)
                  openModal(showProfileDetails)
                }}
                disabled={sentRequests.includes(showProfileDetails.id)}
              >
                {sentRequests.includes(showProfileDetails.id) ? '✓ Solicitud Enviada' : 'Enviar Solicitud de Conexión'}
              </button>
            </div>
          </div>
        </div>
      )}

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
