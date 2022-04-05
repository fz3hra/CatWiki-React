import React from 'react'
import { FaCat } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='mb-5 flex'>
        <h1 className='WikiSectionTitle font-mystery-Quest pr-2 items-center'>CatWiki</h1>
        <FaCat/> 
    </div>
  )
}

export default Header