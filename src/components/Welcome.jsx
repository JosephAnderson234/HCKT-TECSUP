import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
  const [show, setShow] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(() => navigate('/'), 300)
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  if (!show) return null

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="logo-animation">
          <div className="logo-circle">💙</div>
        </div>
        <h1 className="welcome-title">Asistente de Apoyo</h1>
        <p className="welcome-subtitle">Tu bienestar es nuestra prioridad</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
