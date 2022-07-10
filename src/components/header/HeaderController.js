import React from 'react'
import HeaderModel from './HeaderModel.json'
import HeaderView from './HeaderView'

const HeaderController = () => {

  return <HeaderView model={HeaderModel}/>
}

export default HeaderController