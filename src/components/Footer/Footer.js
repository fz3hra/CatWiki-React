import React from 'react'
import { FaCat } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black bottom-0 left-0 w-full footer rounded-t-3xl'>
            <div className="flex justify-around">
                <div className='flex m-10'>
                    <h1 className='text-white WikiSectionTitle font-mystery-Quest pr-2 items-center'>CatWiki</h1>
                    <FaCat className='text-white'/>
                </div>
                <div className='m-10'>
                    <p className='text-white'>
                        &copy; created by <a target="_blank" href="https://www.linkedin.com/in/faatimah-iz-zaahra-m-0670881a1/">fz3hra</a> - devChallenge.io 2022
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Footer