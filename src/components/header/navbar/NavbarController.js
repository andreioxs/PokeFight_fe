import React, { useState } from 'react'
import NavbarView from './NavbarView'

const NavbarController = ({ model }) => {
    const [allLink, setAllLink] = useState(model)

    console.log("allLink", allLink)

    const onClickLink = link => e => setAllLink(prev => {
        // copy
        let result = [...prev]
        // deselect all
        result.map(x => ({ ...x, selected: false }))
        console.log("1", result)
        // index
        const index = result.findIndex(x => x.id === link.id)

        if(index === -1) return console.error("-1 error")

        return result[index].selected = true
    })


    return (
        <NavbarView allLink={allLink} onClickLink={onClickLink} />
    )
}

export default NavbarController