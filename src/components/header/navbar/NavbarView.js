import React from 'react'
import './NavbarView.css'

const NavbarView = ({ allLink, onClickLink }) => {  

  const renderLink = x => (
    <button key={x.id} className={!x.selected ? "" : "selected"} onClick={onClickLink(x)}>
      {JSON.stringify(x)}
    </button>
  )

  const renderAllLink = x => x.map(x => renderLink(x))

  return (
    <div className='container'>

      {renderAllLink(allLink)}


    </div>
  )
}

export default NavbarView