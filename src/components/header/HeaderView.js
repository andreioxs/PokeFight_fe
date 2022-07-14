import React from 'react'
import './HeaderView.css'
import NavbarController from './navbar/NavbarController'

const HeaderView = ({ navbarContext }) => {

  return (
    <div className='header'>

      <a href="/#" ><img src={"images/artoxs.png"} alt="logo" height="100%"/></a>

      <NavbarController
        navbarContext={navbarContext}
      />

    </div>
  )
}

export default HeaderView