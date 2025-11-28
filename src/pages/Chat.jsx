import { useState, useEffect, useRef } from 'react'
import './Chat.css'

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, soy tu asistente de apoyo. Estoy aquí para escucharte sin juicios. ¿Cómo estás hoy?', sender: 'bot' },
    { id: 2, text: 'He tenido una semana muy estresante con los exámenes.', sender: 'user' },
    { id: 3, text: 'Entiendo. Los exámenes pueden ser abrumadores. ¿Quieres hablar sobre qué es lo que más te preocupa?', sender: 'bot' },
    { id: 4, text: 'Siento que no voy a aprobar y eso me está causando mucha ansiedad.', sender: 'user' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const botResponses = [
    'Entiendo cómo te sientes. Es completamente normal sentirse así.',
    'Gracias por compartir eso conmigo. ¿Hay algo específico que te gustaría explorar más?',
    'Eso suena difícil. Recuerda que no estás solo en esto.',
    'Es valiente de tu parte hablar sobre esto. ¿Cómo puedo apoyarte mejor?',
    'Tus sentimientos son válidos. ¿Has pensado en hablar con alguien profesional?',
    'Me alegra que estés compartiendo esto. El primer paso es reconocer cómo te sientes.',
    'Entiendo. A veces ayuda tomar las cosas un día a la vez. ¿Qué te parece?',
    'Eso debe ser muy estresante. ¿Qué estrategias has probado hasta ahora?',
    'Aprecio tu honestidad. ¿Te gustaría que te sugiera algunos recursos que podrían ayudarte?',
    'Es importante cuidar de tu salud mental. ¿Has considerado tomar un descanso?'
  ]

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = { id: Date.now(), text: input, sender: 'user' }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsTyping(true)

      // Vibración táctil (si está disponible)
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }

      // Simular respuesta del bot
      setTimeout(() => {
        setIsTyping(false)
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        const botMessage = { id: Date.now() + 1, text: randomResponse, sender: 'bot' }
        setMessages(prev => [...prev, botMessage])
        
        // Vibración para respuesta
        if (navigator.vibrate) {
          navigator.vibrate([30, 50, 30])
        }
      }, 1500 + Math.random() * 1000)
    }
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
              <span className="time">{msg.sender === 'user' ? 'Tú' : 'Asistente'}</span>
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
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <button className="attach-btn">📎</button>
        <input 
          type="text" 
          placeholder="Escribe aquí cómo te sientes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="send-btn" onClick={sendMessage}>➤</button>
      </div>
    </div>
  )
}

export default Chat
