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

      <div>
        <button className="btn btn-sm float-end btn-primary">Ler mais</button>
      </div>
    </div>
  )
}
