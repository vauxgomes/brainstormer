import React from 'react'
import { useAuth } from '../../providers/auth'

import './styles.css'

export default function IdeaForm({ idea }) {
  const { showForm, setShowForm } = useAuth()

  function handleSubmit(evt) {
    evt.preventDefault()
    evt.target.reset()
    setShowForm(false)
  }

  return (
    <div className={`idea-form-container ${showForm ? 'show' : ''}`}>
      <h5>Nova Ideia</h5>

      <form className="idea-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="title">Descrição</label>
          <textarea className="form-control" required />
        </div>

        <div>
          <button type="submit" className="btn btn-primary me-2">
            Enviar
          </button>

          <button
            type="reset"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowForm(false)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
