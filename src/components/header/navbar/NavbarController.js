import React, { useState } from 'react'
import NavbarView from './NavbarView'

const NavbarController = ({ navbarContext }) => {

    const onClickLink = id => e => navbarContext.setLinkId(id)

    return (
        <NavbarView
            allLink={navbarContext.allLink}
            onClickLink={onClickLink}
            selectId={navbarContext.selectId}
        />
    )
}

export default NavbarController