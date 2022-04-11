import React, { useContext, useState } from 'react'
import Search from '../Search/Search'
import { FaCat } from 'react-icons/fa'
import { AppContext } from '../../hooks/IdContext'

const Banner = ({ posts, setPosts }) => {
  const { searchTerm, setSearchTerm } = useContext(AppContext)
  console.log("posts", posts)
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div id="hero" className="hero bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 h-200 rounded-t-3xl">
        <div className='h-80'>
          <div className='flex-start flex-col items-center p-20'>
              <div className='flex'>
                <h1 className='catWiki'>CatWiki</h1>
                <FaCat className='text-6xl translate-x-6	'/>
              </div>
              <h6 className='catWikiDescription'>Get to know more about your cat breed</h6>
              <div className='pt-10'>
                  {/* search */}
                    <Search posts={posts} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Banner