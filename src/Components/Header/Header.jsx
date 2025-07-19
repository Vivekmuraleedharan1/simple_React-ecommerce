import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
      <Link to='/' style={{textDecoration:'none',color:'#fff'}}  >
        <h1>Shopify</h1>
      </Link>
      
      
      <Link to='/logout'>
      <button className='logout-btn'>Log Out</button>
      </Link>
        
    </header>
  )
}

export default Header