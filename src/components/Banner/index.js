import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useAuth } from '../../providers/auth'

import './styles.css'

export default function Banner() {
  const { setShowForm } = useAuth()

  return (
    <div className="banner">
      <span className="ms-2 badge bg-app-primary fw-normal mb-3">v1.0</span>
      <h1 className="title mb-5 noselect">Brain Stormer</h1>

      <ul className="mb-5">
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

      <nav>
        <HashLink
          to="#idea-form"
          className="btn btn-sm btn-app-primary"
          onClick={(e) => setShowForm(true)}
        >
          Adicione seu projeto
        </HashLink>

        <button className="btn btn-sm btn-app-secondary">
          Ver mais projetos
        </button>
      </nav>

      <footer className="noselect">
        <span>by </span>
        <a href="https://vauxgomes.github.io/" rel="noreferrer" target="_blank">
          vauxgomes
        </a>
      </footer>
    </div>
  )
}
