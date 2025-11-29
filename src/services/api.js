// API Service - Centralized API calls

const API_URLS = {
  TAREAS: import.meta.env.VITE_API_TAREAS,
  AGENTES: import.meta.env.VITE_API_AGENTES,
  ANALISIS: import.meta.env.VITE_API_ANALISIS
}

// Helper function for API calls
async function apiCall(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Error en la petición')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// ============ API TAREAS ============

export const tareasAPI = {
  // Subir tarea
  async subirTarea(file, correo) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('correo', correo)

    const response = await fetch(`${API_URLS.TAREAS}/tareas`, {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  },

  // Listar tareas
  async listarTareas(correo) {
    return apiCall(`${API_URLS.TAREAS}/tareas?correo=${correo}`)
  },

  // Obtener tarea
  async obtenerTarea(id, correo) {
    return apiCall(`${API_URLS.TAREAS}/tareas/${id}?correo=${correo}`)
  },

  // Actualizar tarea
  async actualizarTarea(id, correo, file) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('correo', correo)
    formData.append('id', id)

    const response = await fetch(`${API_URLS.TAREAS}/tareas`, {
      method: 'PUT',
      body: formData
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  },

  // Eliminar tarea
  async eliminarTarea(id, correo) {
    return apiCall(`${API_URLS.TAREAS}/tareas/${id}?correo=${correo}`, {
      method: 'DELETE'
    })
  }
}

// ============ API AGENTES ============

export const agentesAPI = {
  // Consultar agente
  async consultarAgente(correo, contexto, mensaje) {
    return apiCall(`${API_URLS.AGENTES}/agente/consultar`, {
      method: 'POST',
      body: JSON.stringify({ correo, contexto, mensaje })
    })
  },

  // Toggle autorización
  async toggleAutorizacion(correo, autorizacion) {
    return apiCall(`${API_URLS.AGENTES}/usuario/autorizacion`, {
      method: 'POST',
      body: JSON.stringify({ correo, autorizacion })
    })
  }
}

// ============ API ANALISIS ============

export const analisisAPI = {
  // Listar usuarios
  async listarUsuarios() {
    return apiCall(`${API_URLS.ANALISIS}/usuarios`)
  },

  // Obtener usuario
  async obtenerUsuario(correo) {
    return apiCall(`${API_URLS.ANALISIS}/usuario?correo=${correo}`)
  },

  // Actualizar usuario
  async actualizarUsuario(correo, datos) {
    return apiCall(`${API_URLS.ANALISIS}/usuario`, {
      method: 'PUT',
      body: JSON.stringify({ correo, ...datos })
    })
  },

  // Analizar usuario
  async analizarUsuario(correo, mensaje) {
    return apiCall(`${API_URLS.ANALISIS}/analisis/usuario`, {
      method: 'POST',
      body: JSON.stringify({ correo, mensaje })
    })
  }
}
