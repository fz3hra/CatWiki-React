import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import CatCard from '../CatCard/CatCard'
import { FaCat } from 'react-icons/fa'
import Roots from '../../pages/Roots'

const CatWikiSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);
  return (
    <div className='mb-20 ml-20 mr-20 mt-5'>
        <div className='mb-5 flex'>
          <h1 className='WikiSectionTitle font-mystery-Quest pr-2 items-center'>CatWiki</h1>
          <FaCat/> 
        </div>
        <Banner posts={posts} setPosts={setPosts}/>
        <CatCard posts={posts} setPosts={setPosts} loading={loading} setLoading={setLoading}/>
    </div>
  )
}

export default CatWikiSection