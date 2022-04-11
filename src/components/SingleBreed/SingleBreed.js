import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingDetail from '../RatingDetail/RatingDetail'

const SingleBreed = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const id = useParams().id
    console.log("id", id)
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        fetch(`https://api.thecatapi.com/v1/breeds?images/search?breed_ids=${id}&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("res error");
            }
        })
            .then((res) => {
                const newProd = res.find((item) => item.id === id)
                // console.log("newprod", newProd)
                setProduct(newProd)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <p>Data is loading...</p>
    }
    console.log("product", product)
  return (
    <div className='mb-20 ml-20 mr-20 mt-5'>
        <div className='flex justify-around'>
            {/* width: 83.64px */}
            {/* height: 305.12px */}
            {/* border-radius: 14px */}
            <div className='image '>
                {/* width: 371.04px;
                    height: 371.04px; */}
                    {/* bg-light-brown w-20 h-74 */}
                    <img 
                        className='h-96 w-96 rounded-3xl object-cover bg-light-brown'
                        src={product.image?.url}
                        alt="catimage" 
                    />
            </div>
            <div className='ml-20 w-601'>
                <h1 className='p-6'>{product.name}</h1>
                <p className='p-6'>
                    {product.description}
                </p>
                <div className='flex flex-col'>
                    <RatingDetail isText className="temperament p-6" title="temperament" value={product.temperament}/>
                    <RatingDetail isText className="origin p-6" title="origin" value={product.origin}/>
                    <RatingDetail isText className="lifespan p-6" title="lifespan" value={product.life_span}/>
                    <RatingDetail className="adaptability p-6" title="Adaptability" value={product.adaptability}/>
                    <RatingDetail className="affection p-6" title="Affection" value={product.affection}/>
                    <RatingDetail className="friendly p-6" title="child_friendly" value={product.child_friendly}/>
                    <RatingDetail className="grooming p-6" title="grooming" value={product.grooming}/>
                    <RatingDetail className="intelligence p-6" title="intelligence" value={product.intelligence}/>
                    <RatingDetail className="health p-6" title="health" value={product.health_issues}/>
                    <RatingDetail className="social p-6" title="social" value={product.social_needs}/>
                    <RatingDetail className="stranger p-6" title="stranger" value={product.stranger_friendly}/>
                </div>
            </div>
        </div>

        {/* second section */}
        {/* other images */}
    </div>
  )
}

export default SingleBreed