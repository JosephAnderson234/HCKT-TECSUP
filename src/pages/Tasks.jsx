import { useState, useEffect } from 'react'
import { tareasAPI } from '../services/api'
import { authService } from '../services/auth'
import './Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const currentUser = authService.getCurrentUser()

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    if (!currentUser) return

    try {
      setLoading(true)
      const response = await tareasAPI.listarTareas(currentUser.correo)
      setTasks(response.data || [])
    } catch (error) {
      console.error('Error loading tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile || !currentUser) return

    try {
      setUploading(true)
      await tareasAPI.subirTarea(selectedFile, currentUser.correo)
      setShowUploadModal(false)
      setSelectedFile(null)
      await loadTasks()
    } catch (error) {
      console.error('Error uploading task:', error)
      alert('Error al subir la tarea: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (taskId) => {
    if (!currentUser || !confirm('¿Estás seguro de eliminar esta tarea?')) return

    try {
      await tareasAPI.eliminarTarea(taskId, currentUser.correo)
      await loadTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
      alert('Error al eliminar la tarea')
    }
  }

  return (
    <div className="tasks-page">
      <header className="page-header">
        <h1>📝 Mis Tareas</h1>
        <button className="add-task-btn" onClick={() => setShowUploadModal(true)}>
          + Subir Tarea
        </button>
      </header>

      <div className="tasks-container">
        {loading ? (
          <div className="loading">Cargando tareas...</div>
        ) : tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No tienes tareas</h3>
            <p>Sube tu primera tarea para comenzar</p>
          </div>
        ) : (
          <div className="tasks-grid">
            {tasks.map(task => (
              <div key={task.id} className="task-card">
                {task.imagenUrl && (
                  <div className="task-image">
                    <img src={task.imagenUrl} alt="Tarea" />
                  </div>
                )}
                <div className="task-content">
                  <p className="task-text">{task.texto}</p>
                  <div className="task-actions">
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(task.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Subir Tarea</h2>
            <div className="upload-area">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                id="file-input"
                style={{ display: 'none' }}
              />
              <label htmlFor="file-input" className="file-label">
                {selectedFile ? (
                  <div className="file-selected">
                    <span>📄 {selectedFile.name}</span>
                  </div>
                ) : (
                  <div className="file-placeholder">
                    <span className="upload-icon">📤</span>
                    <p>Haz clic para seleccionar una imagen</p>
                  </div>
                )}
              </label>
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-btn" 
                onClick={() => setShowUploadModal(false)}
                disabled={uploading}
              >
                Cancelar
              </button>
              <button 
                className="upload-btn" 
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
              >
                {uploading ? 'Subiendo...' : 'Subir'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks
