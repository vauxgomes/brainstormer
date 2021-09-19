import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function TopBar() {
  const [show, setShow] = useState(false)

  return (
    <div className="container-fluid shadow py-2">
      <nav className="topbar">
        <div className="brand">
          <span className="icon icon-lg material-icons me-1">
            emoji_objects
          </span>
          <span className="h4 my-0">Brain Stormer</span>
        </div>

        <button
          className="toggler btn btn-link text-dark"
          onClick={() => setShow(!show)}
        >
          <span className="material-icons-outlined">menu</span>
        </button>

        <ul className={`menus collapsed ${show ? 'show' : ''}`}>
          <li>
            <Link aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link aria-current="page" to="/404">
              Link
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
