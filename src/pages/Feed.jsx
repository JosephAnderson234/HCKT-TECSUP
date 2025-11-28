import { useState } from 'react'
import Notification from '../components/Notification'
import './Feed.css'
import hackathonImg from '../assets/images/hckt.jpg'
import bienestarImg from '../assets/images/bienestar.webp'

function Feed() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [bookmarked, setBookmarked] = useState([])
  const [registered, setRegistered] = useState([])
  const [notification, setNotification] = useState(null)

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
          <input type="text" placeholder="Buscar por palabra clave..." />
        </div>
        <div className="filter-tabs">
          {['Todos', 'Grupos', 'Eventos', 'Tuto'].map(filter => (
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
        <div className="event-card">
          <div className="event-image">
            <img src={hackathonImg} alt="Hackathon" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <button 
            className={`bookmark ${bookmarked.includes(1) ? 'active' : ''}`}
            onClick={() => toggleBookmark(1)}
          >
            {bookmarked.includes(1) ? '🔖' : '📑'}
          </button>
          <div className="event-info">
            <h3>Hackathon de Innovación Tech</h3>
            <p>Únete al mayor evento de tecnología del campus y crea soluciones innovadoras.</p>
            <div className="tags">
              <span className="tag">Tecnología</span>
              <span className="tag">Competencia</span>
            </div>
            <button 
              className={`btn-join ${registered.includes(1) ? 'registered' : ''}`}
              onClick={() => handleRegister(1, 'Hackathon de Innovación Tech')}
              disabled={registered.includes(1)}
            >
              {registered.includes(1) ? '✓ Registrado' : 'Apuntarse'}
            </button>
          </div>
        </div>

        <div className="section-header">
          <button className="menu-icon">☰</button>
          <h2>Recursos</h2>
          <button className="notification-icon">🔔</button>
        </div>

        <div className="resource-card">
          <div className="resource-image">
            <img src={bienestarImg} alt="Bienestar Mental" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <button 
            className={`bookmark ${bookmarked.includes(2) ? 'active' : ''}`}
            onClick={() => toggleBookmark(2)}
          >
            {bookmarked.includes(2) ? '🔖' : '📑'}
          </button>
          <div className="event-info">
            <h3>Guía de Bienestar Mental</h3>
            <p>Recursos y técnicas para manejar el estrés académico.</p>
            <div className="tags">
              <span className="tag">Salud Mental</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
