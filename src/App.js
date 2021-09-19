import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Card from './components/Card'
import IdeaForm from './components/IdeaForm'

import './app.css'
import Banner from './components/Banner'

function App() {
  const ideas = [
    {
      id: 1,
      title: 'Brainstormer',
      description:
        'Desenvolver app em React capaz de armazenar e compartilhar listas de ideias à comunidade de interesse'
    }
  ]

  return (
    <Router>
      <div className="app">
        {/* BANNER */}
        <Banner />

        {/* MAIN */}

        <main className="ideias pb-5">
          <div className="search-bar">
            <span className="icon-lg material-icons text-muted">search</span>
            <input
              id="search"
              type="text"
              placeholder="Procure por uma idéia"
            />
          </div>

          <IdeaForm />

          <h6 className="fw-light">Mais avaliados...</h6>
          <div className="cards">
            {ideas.map((idea, key) => (
              <Card idea={idea} key={key} />
            ))}
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
