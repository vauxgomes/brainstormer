import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <nav className="container d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <span className="icon-lg material-icons">emoji_objects</span>
        <span className="fs-4 fw-bold">Brain Stormer</span>
      </div>

      <ul className="d-flex align-items-center list-unstyled">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </nav>
  )
}
