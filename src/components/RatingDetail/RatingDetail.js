import React from 'react'
import Rating from '../Rating/Rating'

const RatingDetail = ({title, value, isText}) => {
  return (
    <div className='flex items-center justify-start gap-8 p-6'>
        <strong>{title}: </strong>
            {isText ? (<span>{value}</span>) : (<Rating value={value}/>)}
    </div>
  )
}

export default RatingDetail