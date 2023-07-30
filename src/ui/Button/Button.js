import React from 'react'
import './Button.scss'

export const Button = ({ title, bgc }) => {
  return (
    <button className="btn" style={{ background: `${bgc}` }}>
      {title}
    </button>
  )
}
