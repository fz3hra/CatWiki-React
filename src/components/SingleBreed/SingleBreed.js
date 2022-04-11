import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingDetail from '../RatingDetail/RatingDetail'
import axios from 'axios'

const SingleBreed = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [others, setOthers] = useState([])
    const id = useParams().id
    console.log("id", id)
    useEffect(() => {
        getProduct();

        axios.get('https://api.thecatapi.com/v1/images/search?limit=8&breeds_ids=${id}&api_key=${process.env.REACT_APP_API_KEY}')
            .then((res) => {
                setOthers(res.data)
            })
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
    console.log("other", others)
  return (
    <div className='mb-20 ml-20 mr-20 mt-5'>
        <div className='flex justify-around'>
            <div className='image '>
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
        <div className='mt-20 mb-20'>
            <h1>Other Photos</h1>
            <div className='grid grid-cols-4 gap-8 pt-10'>
                {
                    others.map((other) => (
                        <div>
                            <img className="h-71 w-71 bg-cover rounded-3xl" src={other.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SingleBreed