import React from 'react'
import { useAuth } from '../../providers/auth'

import './styles.css'

export default function Banner() {
  const { setShowForm } = useAuth()

  return (
    <div className="banner">
      <span className="ms-2 badge badge-primary fw-normal mb-3">v1.0</span>
      <h1 className="title mb-5">Brain Stormer</h1>

      <ul>
        <li>
          <span className="icon icon-lg material-icons">emoji_objects</span>
          Procure por projetos
        </li>
        <li>
          <span className="icon icon-lg material-icons">emoji_objects</span>
          Apresente soluções
        </li>
        <li>
          <span className="icon icon-lg material-icons">emoji_objects</span>
          Cresça em comunidade
        </li>
      </ul>

      <button
        className="btn btn-sm btn-primary my-4"
        onClick={(e) => setShowForm(true)}
      >
        Adicione seu projeto
      </button>

      <footer>
        by
        <a href="https://vauxgomes.github.io/" rel="noreferrer" target="_blank">
          vauxgomes
        </a>
      </footer>
    </div>
  )
}
