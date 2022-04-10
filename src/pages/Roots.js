import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CatDetailed from '../components/CatDetailed/CatDetailed'
import CatWikiSection from '../components/CatWikiSection/CatWikiSection'
import MostSearched from '../components/MostSearched/MostSearched'

const Roots = () => {
  return (
    <Routes>
        <Route path="/" element={<CatWikiSection />}/>
        <Route path="most-searched" element={<MostSearched />}/>
        <Route path="/:id" element={<CatDetailed />}/>
    </Routes>
  )
}

export default Roots