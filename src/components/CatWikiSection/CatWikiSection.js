import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import CatCard from '../CatCard/CatCard'
import Roots from '../../pages/Roots'
import Header from '../Header/Header'
import Why from '../Why/Why'
import Footer from '../Footer/Footer'

const CatWikiSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);
  return (
    <div id="home" className='mb-20 ml-20 mr-20 mt-5'>
        <Header />
        <Banner posts={posts} setPosts={setPosts}/>
        <CatCard posts={posts} setPosts={setPosts} loading={loading} setLoading={setLoading}/>
        <Why />
        <Footer />
    </div>
  )
}

export default CatWikiSection