import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return <div className="m-5 p-5 text-center d-flex flex-column align-items-center" >
    <span className="display-1 fw-bolder text-app-secondary">Ooops!</span>
    <span className="text-uppercase fw-bold text-app-primary mb-2">404 - Página Não Encontrada</span>
    <p className="small w-50 text-muted mb-4">
      Esta página não existe ou não é possível acessá-la neste momento.
    </p>

    <Link to="/home" className="btn btn-app-primary">Volte ao Home</Link>
  </div>
}
