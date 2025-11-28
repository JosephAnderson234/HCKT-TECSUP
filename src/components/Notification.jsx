import { useEffect } from 'react'
import './Notification.css'

function Notification({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  }

  return (
    <div className={`notification notification-${type}`}>
      <span className="notification-icon">{icons[type]}</span>
      <p className="notification-message">{message}</p>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  )
}

export default Notification
