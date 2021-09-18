import React from 'react'
import { useAuth } from '../../providers/auth'
import TagInput from '../TagInput'

import './styles.css'

export default function IdeaForm() {
  const { showForm, setShowForm } = useAuth()

  function handleSubmit(evt) {
    evt.preventDefault()
    evt.target.reset()
    setShowForm(false)
  }

  return (
    <div id="idea-form" className={`idea-form-container ${showForm ? 'show' : ''}`}>
      <form className="idea-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" className="form-control" autoFocus required />
        </div>

        <div className="form-group">
          <label htmlFor="title">Descrição</label>
          <textarea className="form-control" rows="4" required />
        </div>

        <TagInput id="tags" />

        <div>
          <button type="submit" className="btn btn-app-primary me-2">
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
