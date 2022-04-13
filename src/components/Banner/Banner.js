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
    <div id="hero" className="hero desktop:bg-cover desktop:bg-gradient-to-r desktop:from-cyan-500 desktop:to-blue-500 desktop:h-200 desktop:rounded-t-3xl">
        <div className='desktop:h-80'>
          <div className='desktop:flex-start desktop:flex-col desktop:items-center desktop:p-20'>
              <div className='desktop:flex'>
                <h1 className='catWiki'>CatWiki</h1>
                <FaCat className='desktop:text-6xl desktop:translate-x-6	'/>
              </div>
              <h6 className='catWikiDescription'>Get to know more about your cat breed</h6>
              <div className='desktop:pt-10'>
                  {/* search */}
                    <Search posts={posts} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Banner