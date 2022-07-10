import React from 'react'
import './HeaderView.css'
import NavbarController from './navbar/NavbarController'

const HeaderView = ({ model }) => {

  return (
    <div className='container'>

      <div>logo</div>

      <NavbarController model={model.navbar} />

    </div>
  )
}

export default HeaderView