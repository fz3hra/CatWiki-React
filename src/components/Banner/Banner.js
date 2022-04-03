import React, { useState } from 'react'
import Search from '../Search/Search'
import { FaCat } from 'react-icons/fa'

const Banner = ({ posts, setPosts }) => {
  console.log("posts", posts)
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-80 rounded-t-3xl">
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