import React from 'react'
import Card from './components/Card'
import IdeaForm from './components/IdeaForm'

import './app.css'
import Banner from './components/Banner'

function App() {
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
      <Banner />

      {/* MAIN */}
      <div>
        <main className="ideias">
          <div className="search-bar">
            <span className="icon-lg material-icons text-muted">search</span>
            <input
              id="search"
              type="text"
              placeholder="Procure por uma idéia"
            />
          </div>

          <IdeaForm />

          <h6 className="fw-light">Mais Recentes...</h6>
          <div className="cards">
            {ideas.map((idea, key) => (
              <Card idea={idea} key={key} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
