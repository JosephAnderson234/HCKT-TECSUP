import { useState, useEffect, useRef } from 'react'
import { quickReplies, chatSuggestions } from '../data/mockData'
import { agentesAPI } from '../services/api'
import { authService } from '../services/auth'
import './Chat.css'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedContext, setSelectedContext] = useState('Psicologo')
  const [showContextMenu, setShowContextMenu] = useState(false)
  const messagesEndRef = useRef(null)
  const currentUser = authService.getCurrentUser()

  const contexts = [
    { value: 'MentorAcademico', label: '🎓 Mentor Académico', color: '#667eea' },
    { value: 'Psicologo', label: '🧠 Psicólogo', color: '#f093fb' },
    { value: 'OrientadorVocacional', label: '🎯 Orientador Vocacional', color: '#4facfe' }
  ]

  useEffect(() => {
    // Initial greeting
    const greeting = {
      id: Date.now(),
      text: `Hola, soy tu ${contexts.find(c => c.value === selectedContext)?.label}. Estoy aquí para escucharte sin juicios. ¿Cómo puedo ayudarte hoy?`,
      sender: 'bot',
      time: getCurrentTime()
    }
    setMessages([greeting])
  }, [selectedContext])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getCurrentTime = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
  }

  const sendMessage = async (text = input) => {
    if (text.trim() && currentUser) {
      const userMessage = { id: Date.now(), text, sender: 'user', time: getCurrentTime() }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsTyping(true)
      setShowQuickReplies(false)
      setShowSuggestions(false)

      // Vibración táctil (si está disponible)
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }

      try {
        const response = await agentesAPI.consultarAgente(
          currentUser.correo,
          selectedContext,
          text
        )

        setIsTyping(false)
        const botMessage = {
          id: Date.now() + 1,
          text: response.respuesta,
          sender: 'bot',
          time: getCurrentTime()
        }
        setMessages(prev => [...prev, botMessage])

        // Vibración para respuesta
        if (navigator.vibrate) {
          navigator.vibrate([30, 50, 30])
        }
      } catch (error) {
        setIsTyping(false)
        const errorMessage = {
          id: Date.now() + 1,
          text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor intenta de nuevo.',
          sender: 'bot',
          time: getCurrentTime()
        }
        setMessages(prev => [...prev, errorMessage])
        console.error('Error sending message:', error)
      }
    }
  }

  const handleQuickReply = (reply) => {
    sendMessage(reply)
  }

  const handleSuggestion = (suggestion) => {
    setInput(suggestion)
    setShowSuggestions(false)
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <button className="back-btn" onClick={() => window.history.back()}>←</button>
        <div className="header-title" onClick={() => setShowContextMenu(!showContextMenu)}>
          <h1>{contexts.find(c => c.value === selectedContext)?.label}</h1>
          <span className="context-indicator">▼</span>
        </div>
        <button className="menu-btn">⋮</button>
      </header>

      {showContextMenu && (
        <div className="context-menu">
          {contexts.map(ctx => (
            <button
              key={ctx.value}
              className={`context-option ${selectedContext === ctx.value ? 'active' : ''}`}
              onClick={() => {
                setSelectedContext(ctx.value)
                setShowContextMenu(false)
              }}
              style={{ borderLeft: `4px solid ${ctx.color}` }}
            >
              {ctx.label}
            </button>
          ))}
        </div>
      )}

      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="avatar">{msg.sender === 'bot' ? '🤖' : '👤'}</div>
            <div className="bubble">
              {msg.text}
              <span className="time">{msg.time}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing">
            <div className="avatar">🤖</div>
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        
        {showQuickReplies && messages.length > 0 && (
          <div className="quick-replies-container">
            <p className="quick-replies-label">Respuestas rápidas:</p>
            <div className="quick-replies">
              {quickReplies.map((reply, idx) => (
                <button 
                  key={idx} 
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        {showSuggestions && (
          <div className="suggestions">
            {chatSuggestions.map((suggestion, idx) => (
              <button 
                key={idx} 
                className="suggestion-btn"
                onClick={() => handleSuggestion(suggestion)}
              >
                💡 {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <div className="chat-input">
          <button 
            className="attach-btn"
            onClick={() => setShowSuggestions(!showSuggestions)}
            title="Ver sugerencias"
          >
            💡
          </button>
          <input 
            type="text" 
            placeholder="Escribe aquí cómo te sientes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            onFocus={() => setShowQuickReplies(false)}
          />
          <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim()}>
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
