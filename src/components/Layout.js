import React from 'react'

import Header from './Header'
import Footer from './Footer'
import './all.sass'
import '../styles/global.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
