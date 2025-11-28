import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Help from './pages/Help'
import Results from './pages/Results'
import Feed from './pages/Feed'
import Welcome from './components/Welcome'
import './App.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>🏠</Link>
      <Link to="/results" className={`nav-item ${location.pathname === '/results' ? 'active' : ''}`}>👥</Link>
      <Link to="/chat" className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}>💬</Link>
      <Link to="/help" className={`nav-item ${location.pathname === '/help' ? 'active' : ''}`}>❓</Link>
      <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>👤</Link>
    </nav>
  )
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {showWelcome && <Welcome />}
      <div className="app">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  )
}

export default App
