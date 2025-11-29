import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/auth'
import './Login.css'

function Login() {
  const [selectedUser, setSelectedUser] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const users = authService.getAllUsers()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!selectedUser) {
      setError('Por favor selecciona un usuario')
      return
    }

    try {
      authService.login(selectedUser)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>🎓 Tecsup</h1>
          <p>Plataforma de Apoyo Estudiantil</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="user-select">Selecciona tu usuario</label>
            <select
              id="user-select"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="user-select"
            >
              <option value="">-- Selecciona un correo --</option>
              {users.map(user => (
                <option key={user.id} value={user.correo}>
                  {user.correo}
                </option>
              ))}
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>

        <div className="login-footer">
          <p>Demo - Selecciona cualquier usuario para continuar</p>
        </div>
      </div>
    </div>
  )
}

export default Login
