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
    <div className='background desktop:mb-20 desktop:ml-20 desktop:mr-20 desktop:mt-5'>
        <Header />
        <div className='foremost'>
            <div>
                <h1 className='desktop:font-montserrat desktop:font-bold desktop:text-4xl'>Top 10 most search breeds</h1>
            </div>
            {mostSearched.map((search) => (
                <div className='content desktop:flex desktop:mt-8 desktop:mb-8'>
                {/* height: 170px; width: 170px */}
                {/* <div className='image mr-10 w-44 h-44'> */}
                <img 
                    className='desktop:mr-10 desktop:w-44 desktop:h-44 desktop:object-cover desktop:rounded-lg'
                    src={search.image.url} 
                    alt="most-searched-breed" 
                />
                {/* </div> */}
                <div>
                    <h1 className='desktop:font-montserrat desktop:font-semibold desktop:text-4xl'>{search.name}</h1>
                    <p className='desktop:mt-5 desktop:font-montserrat desktop:font-medium desktop:text-lg'>{search.description}</p>
                </div>
            </div>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default MostSearched