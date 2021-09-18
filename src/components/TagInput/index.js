import React, { useState } from 'react'

import './styles.css'

export default function TagInput(props) {
  const [show, setShow] = useState(false)
  const [tags, setTags] = useState('')

  function handleChange(value) {
    value = value.trim().replaceAll('#', '').replaceAll(', ', ',')
    setTags(value)
  }

  if (show && tags) {
    return (
      <div onClick={() => setShow(false)} className="tags">
        {tags
          .split(',')
          .filter((s) => s)
          .map((s) => `#${s}`.trim())
          .map((s) => (
            <small>{s}</small>
          ))}
      </div>
    )
  }

  return (
    <div className="form-group">
      <label htmlFor="tags">Tags</label>
      <input
        value={tags}
        className="form-control"
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setShow(true)}
      />
      <small>Acrescente tags separadas por vírgula</small>
    </div>
  )
}
