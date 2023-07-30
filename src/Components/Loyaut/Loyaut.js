import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Loyaut = ({ children }) => {
  return (
    <div className="loyaut">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
