import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Why = () => {
  return (
    <div className='m-20 flex'>
        <div className='line'></div>
        <div className='mt-10 mr-8'>
            <h1 className='font-montserrat font-bold text-5xl mb-8'>Why should you have a cat?</h1>
            <p className='font-montserrat font-medium text-lg mb-8'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <HashLink to="#home" className="seeMore font-bold">Read More</HashLink>
        </div>
        <div className='grid grid-cols-3 gap-5 mx-auto space-y-3 pb-28 w-[1200px]'>
            <div className='break-inside-avoid'>
                <img 
                    className='rounded-lg'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
            <div className='break-inside-avoid'>
                <img 
                    className='rounded-lg h-60 w-32 object-cover'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
            <div className='break-inside-avoid'>
                <img 
                    className='rounded-lg h-52 w-32 object-cover'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
        </div>
    </div>
  )
}

export default Why