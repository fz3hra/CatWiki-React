import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const MostSearched = () => {
    const [mostSearched, setMostSearched] = useState([])
    const baseURL = process.env.REACT_APP_BASE_URL_MOST_SEARCHED
    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setMostSearched(res.data)
            console.info("searc", res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
  return (
    <div className='background mb-20 ml-20 mr-20 mt-5'>
        <Header />
        <div className='foremost'>
            <div>
                <h1 className='font-montserrat font-bold text-4xl'>Top 10 most search breeds</h1>
            </div>
            {mostSearched.map((search) => (
                <div className='content flex mt-8 mb-8'>
                {/* height: 170px; width: 170px */}
                {/* <div className='image mr-10 w-44 h-44'> */}
                <img 
                    className='mr-10 w-44 h-44 object-cover rounded-lg'
                    src={search.image.url} 
                    alt="most-searched-breed" 
                />
                {/* </div> */}
                <div>
                    <h1 className='font-montserrat font-semibold text-4xl'>{search.name}</h1>
                    <p className='mt-5 font-montserrat font-medium text-lg'>{search.description}</p>
                </div>
            </div>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default MostSearched