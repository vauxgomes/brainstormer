import React from 'react'
import './styles.css'

export default function Card({ idea }) {
  return (
    <div className="idea-card">
      <h5>
        <span className="icon icon-lg material-icons">campaign</span>
        <span>{idea.title}</span>
      </h5>

      <p>{idea.description}</p>

      <div className="d-flex justify-content-between align-items-center">
        <div className="status">
          <span className="icon-sm material-icons">visibility</span>
          <span>1k</span>

          <span className="icon-sm material-icons">favorite</span>
          <span>1k</span>
        </div>
        <button className="btn btn-sm btn-primary">Ler mais</button>
      </div>
    </div>
  )
}
