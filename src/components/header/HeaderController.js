import React from 'react'
import HeaderView from './HeaderView'

import { useNavbarContext } from '../../contexts/NavbarContext'


const HeaderController = () => {
  const navbarContext = useNavbarContext()


  return <HeaderView
    navbarContext={navbarContext}
  />
}

export default HeaderController