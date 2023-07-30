import React from 'react'
import { footerMenu, footerOther } from '../../Constants'
import { FooterMultiply } from '../FooterMultiply/FooterMultiply'

import logo from '../../Assets/images/logo.png'

import './Footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="inner">
          <div className="footer__desc">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
            <p className="footer__desc-text">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non .
            </p>
          </div>
          <FooterMultiply title="Menu Items" arr={footerMenu} />
          <FooterMultiply title="Other Pages" arr={footerOther} />
        </div>
      </div>
    </div>
  )
}
