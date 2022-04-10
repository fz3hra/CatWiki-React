import React from 'react'
import { FaCat } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/">
      <div className='mb-5 flex'>
            <h1 className='WikiSectionTitle font-mystery-Quest pr-2 items-center'>CatWiki</h1>
            <FaCat/> 
      </div>
    </Link>
  )
}

export default Header