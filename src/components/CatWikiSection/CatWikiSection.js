import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import CatCard from '../CatCard/CatCard'
import { FaCat } from 'react-icons/fa'

const CatWikiSection = () => {
      // const baseURL = "https://api.thecatapi.com/v1/images/search?api_key=cef8de37-19fb-480a-8a09-5d5f6180393a"
// console.log("rev", baseURL)
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