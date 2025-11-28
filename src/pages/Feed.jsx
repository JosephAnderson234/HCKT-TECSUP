import { useState } from 'react'
import Notification from '../components/Notification'
import { events, resources } from '../data/mockData'
import './Feed.css'

function Feed() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [bookmarked, setBookmarked] = useState([])
  const [registered, setRegistered] = useState([])
  const [notification, setNotification] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showEventDetails, setShowEventDetails] = useState(null)

  const toggleBookmark = (id) => {
    setBookmarked(prev => {
      const isBookmarked = prev.includes(id)
      
      // Vibración táctil
      if (navigator.vibrate) {
        navigator.vibrate(isBookmarked ? 30 : 50)
      }
      
      return isBookmarked ? prev.filter(i => i !== id) : [...prev, id]
    })
  }

  const handleRegister = (id, name) => {
    if (!registered.includes(id)) {
      setRegistered([...registered, id])
      
      // Vibración de éxito
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50])
      }
      
      setNotification({
        message: `¡Te has registrado exitosamente en "${name}"! Recibirás más información por correo.`,
        type: 'success'
      })
    }
  }

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'Todos' || 
                         (activeFilter === 'Eventos' && event.type === 'event') ||
                         (activeFilter === 'Grupos' && event.type === 'group')
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="feed-page">
      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar eventos, grupos o recursos..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
        <div className="filter-tabs">
          {['Todos', 'Eventos', 'Grupos', 'Recursos'].map(filter => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="feed-content">
        {(activeFilter === 'Todos' || activeFilter === 'Eventos' || activeFilter === 'Grupos') && (
          <>
            <div className="section-header">
              <h2>{activeFilter === 'Grupos' ? 'Grupos de Apoyo' : activeFilter === 'Eventos' ? 'Próximos Eventos' : 'Destacados'}</h2>
              <span className="count">{filteredEvents.length} disponibles</span>
            </div>
            
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                  />
                  <span className="event-type-badge">{event.type === 'event' ? '📅 Evento' : '👥 Grupo'}</span>
                </div>
                <button 
                  className={`bookmark ${bookmarked.includes(event.id) ? 'active' : ''}`}
                  onClick={() => toggleBookmark(event.id)}
                >
                  {bookmarked.includes(event.id) ? '🔖' : '📑'}
                </button>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  
                  <div className="event-meta">
                    <span className="meta-item">📅 {event.date}</span>
                    <span className="meta-item">⏰ {event.time}</span>
                    <span className="meta-item">📍 {event.location}</span>
                  </div>
                  
                  <div className="event-stats">
                    <span className="stat">👥 {event.attendees}/{event.capacity}</span>
                    <span className="stat">👤 {event.organizer}</span>
                    <span className="stat price">{event.price}</span>
                  </div>
                  
                  <div className="tags">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="event-actions">
                    <button 
                      className="btn-secondary"
                      onClick={() => setShowEventDetails(event)}
                    >
                      Ver Detalles
                    </button>
                    <button 
                      className={`btn-join ${registered.includes(event.id) ? 'registered' : ''}`}
                      onClick={() => handleRegister(event.id, event.title)}
                      disabled={registered.includes(event.id)}
                    >
                      {registered.includes(event.id) ? '✓ Registrado' : 'Apuntarse'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {(activeFilter === 'Todos' || activeFilter === 'Recursos') && (
          <>
            <div className="section-header">
              <h2>Recursos de Bienestar</h2>
              <span className="count">{filteredResources.length} recursos</span>
            </div>

            {filteredResources.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className="resource-image">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                  />
                  <span className="resource-type-badge">{resource.type}</span>
                </div>
                <button 
                  className={`bookmark ${bookmarked.includes(`resource-${resource.id}`) ? 'active' : ''}`}
                  onClick={() => toggleBookmark(`resource-${resource.id}`)}
                >
                  {bookmarked.includes(`resource-${resource.id}`) ? '🔖' : '📑'}
                </button>
                <div className="event-info">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  
                  <div className="resource-meta">
                    <span className="meta-item">⏱️ {resource.duration}</span>
                    <span className="meta-item">⭐ {resource.rating}</span>
                    <span className="meta-item">👁️ {resource.views} vistas</span>
                  </div>
                  
                  <div className="tags">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <button className="btn-primary">Acceder al Recurso</button>
                </div>
              </div>
            ))}
          </>
        )}

        {filteredEvents.length === 0 && filteredResources.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otros términos de búsqueda o filtros</p>
          </div>
        )}
      </div>

      {showEventDetails && (
        <div className="modal-overlay" onClick={() => setShowEventDetails(null)}>
          <div className="modal event-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowEventDetails(null)}>×</button>
            <h2>{showEventDetails.title}</h2>
            <div className="modal-content">
              <p className="event-description">{showEventDetails.description}</p>
              
              <div className="detail-section">
                <h4>📅 Fecha y Hora</h4>
                <p>{showEventDetails.date} • {showEventDetails.time}</p>
              </div>
              
              <div className="detail-section">
                <h4>📍 Ubicación</h4>
                <p>{showEventDetails.location}</p>
              </div>
              
              <div className="detail-section">
                <h4>👤 Organizador</h4>
                <p>{showEventDetails.organizer}</p>
              </div>
              
              <div className="detail-section">
                <h4>👥 Asistentes</h4>
                <p>{showEventDetails.attendees} de {showEventDetails.capacity} lugares ocupados</p>
              </div>
              
              <div className="detail-section">
                <h4>🏷️ Categorías</h4>
                <div className="tags">
                  {showEventDetails.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn-primary"
                onClick={() => {
                  handleRegister(showEventDetails.id, showEventDetails.title)
                  setShowEventDetails(null)
                }}
                disabled={registered.includes(showEventDetails.id)}
              >
                {registered.includes(showEventDetails.id) ? '✓ Ya Registrado' : 'Registrarse Ahora'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed
