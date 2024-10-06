import React from 'react'
import './NaviBar.css'
import { Link } from 'react-router-dom'

function NaviBar() {
  return (
    <div className='NaviBar'>
        <div className='NaviBarTitles' >
          <div className='NavTitle'>Coffee Bunch</div>

            <Link to="/Home">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About</Link>
            
        </div>
      
    </div>
  )
}

export default NaviBar
