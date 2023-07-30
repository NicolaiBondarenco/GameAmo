import React from 'react'
import './FooterItem.scss'

export const FooterItem = ({ title }) => {
  return (
    <li className="footerItem">
      <a href="#">{title}</a>
    </li>
  )
}
