import PropTypes from 'prop-types'
import Button from './Button'
import React from "react"

const Header = ({title,onAdd,showAdd}) => {
    const onClick = () => {
        
    }
    return (
        <header className = 'header'>
            <h1 style = {headingStyle}>{title}</h1>
            <Button color={showAdd?'red':'green'}text={showAdd?'Close':'Add'} onClick={onAdd} />
        </header>
    )

}


Header.defaultProps ={
    title: 'Hell or Paradise',
}

Header.prototype ={
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',backgroundColor:'black',
}

export default Header
