import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CatWikiSection from '../components/CatWikiSection/CatWikiSection'
import MostSearched from '../components/MostSearched/MostSearched'

const Roots = () => {
  return (
    <Routes>
        <Route path="/" element={<CatWikiSection />}/>
        <Route path="most-searched" element={<MostSearched />}/>
    </Routes>
  )
}

export default Roots