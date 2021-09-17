import React from 'react'
import './styles.css'

export default function InputCard({ idea }) {
  return (
    <div className="idea-card-input-container">
      <div className="idea-card-input">
        <div className="field">
          <span className="material-icons">emoji_objects</span>
          <span contentEditable={true}>Título</span>
        </div>

        <div className="field">
          <span className="material-icons">face</span>
          <span>Autor</span>
        </div>

        <div className="field">
          <span className="material-icons">assignment</span>
          <p contentEditable={true}>Descreva sua idéia...</p>
        </div>

        <div className="field">
          <span className="material-icons">tag</span>
          <span>Tags</span>
        </div>
      </div>

      <button className="btn btn-sm btn-primary btn-card-input">
        Enviar <span className="ms-2 small material-icons">send</span>
      </button>
    </div>
  )
}
