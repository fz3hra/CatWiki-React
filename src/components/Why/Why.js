import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Why = () => {
  return (
    <div className='desktop:m-20 desktop:flex'>
        <div className='line'></div>
        <div className='desktop:mt-10 desktop:mr-8'>
            <h1 className='desktop:font-montserrat desktop:font-bold desktop:text-5xl desktop:mb-8'>Why should you have a cat?</h1>
            <p className='desktop:font-montserrat desktop:font-medium desktop:text-lg desktop:mb-8'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
            <HashLink to="#home" className="seeMore desktop:font-bold">Read More</HashLink>
        </div>
        <div className='desktop:grid desktop:grid-cols-3 desktop:gap-5 desktop:mx-auto desktop:space-y-3 desktop:pb-28 desktop:w-[1200px]'>
            <div className='desktop:break-inside-avoid'>
                <img 
                    className='desktop:rounded-lg'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
            <div className='desktop:break-inside-avoid'>
                <img 
                    className='desktop:rounded-lg desktop:h-60 desktop:w-32 desktop:object-cover'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
            <div className='desktop:break-inside-avoid'>
                <img 
                    className='desktop:rounded-lg desktop:h-52 desktop:w-32 desktop:object-cover'
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" 
                />
            </div>
        </div>
    </div>
  )
}

export default Why