import React from 'react'
import "./Header.css"
import logo from "./Logo.png"

const header = () => {
  return (
    <div>
        <img className='logo' src={logo} alt='logo'></img>
    </div>
  )
}

export default header