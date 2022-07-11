import React from 'react'
import './HeaderView.css'
import NavbarController from './navbar/NavbarController'

const HeaderView = ({ navbarContext }) => {

  return (
    <div className='header'>

      <img
        src={""}
        alt="logo"
      />

      <NavbarController
        navbarContext={navbarContext}
      />

    </div>
  )
}

export default HeaderView