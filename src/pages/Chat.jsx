import { useState, useEffect, useRef } from 'react'
import { botResponses, quickReplies, chatSuggestions } from '../data/mockData'
import './Chat.css'

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, soy tu asistente de apoyo. Estoy aquí para escucharte sin juicios. ¿Cómo estás hoy?', sender: 'bot', time: '10:30' },
    { id: 2, text: 'He tenido una semana muy estresante con los exámenes.', sender: 'user', time: '10:31' },
    { id: 3, text: 'Entiendo. Los exámenes pueden ser abrumadores. ¿Quieres hablar sobre qué es lo que más te preocupa?', sender: 'bot', time: '10:31' },
    { id: 4, text: 'Siento que no voy a aprobar y eso me está causando mucha ansiedad.', sender: 'user', time: '10:32' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const messagesEndRef = useRef(null)

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

  const sendMessage = (text = input) => {
    if (text.trim()) {
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

      // Simular respuesta del bot
      setTimeout(() => {
        setIsTyping(false)
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        const botMessage = { id: Date.now() + 1, text: randomResponse, sender: 'bot', time: getCurrentTime() }
        setMessages(prev => [...prev, botMessage])
        
        // Vibración para respuesta
        if (navigator.vibrate) {
          navigator.vibrate([30, 50, 30])
        }
      }, 1500 + Math.random() * 1000)
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
        <button className="back-btn">←</button>
        <h1>Asistente de Apoyo</h1>
        <button className="menu-btn">⋮</button>
      </header>

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
