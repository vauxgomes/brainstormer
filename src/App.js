import React, { useState } from 'react'
import './app.css'
import Card from './components/Card'
import InputCard from './components/InputCard'

function App() {
  const [show, setShow] = useState(false)

  const ideas = [
    {
      id: 1,
      title: 'App brainstorm',
      description:
        'Desenvolver app em React capaz de armazenar e compatirlhar lista de ideias à comunidade de interesse'
    }
  ]

  return (
    <div className="app">
      {/* BANNER */}
      <div className="banner">
        <span className="ms-2 badge bg-primary fw-normal mb-3">v1.0</span>
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
          onClick={(e) => setShow(true)}
        >
          Adicione seu projeto
        </button>

        <footer>
          by{' '}
          <a
            href="https://vauxgomes.github.io/"
            rel="noreferrer"
            target="_blank"
          >
            vauxgomes
          </a>
        </footer>
      </div>

      {/* MAIN */}
      <main className="ideias">
        <div className="search-bar">
          <span className="icon-lg material-icons text-muted">search</span>
          <input id="search" type="text" placeholder="Procure por uma idéia" />
        </div>

        <h6 className="fw-light">Mais Recentes...</h6>
        <div className="cards">
          {show ? <InputCard /> : ''}

          {ideas.map((idea, key) => (
            <Card idea={idea} key={key} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
