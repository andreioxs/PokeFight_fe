import React from 'react'
import './NavbarView.css'
import {
  Link,
} from "react-router-dom";

const NavbarView = ({ allLink, onClickLink, selectId }) => {

  const renderLink = x => (
    <Link
      key={x.id}
      className={x.id !== selectId ? "" : "navbar-selected"} onClick={onClickLink(x.id)}
      to={x.link}
    >
      {x.text}
    </Link>
  )

  const renderAllLink = x => x.map(x => renderLink(x))

  return (
    <div className='navbar'>

      {renderAllLink(allLink)}

    </div>
  )
}

export default NavbarView