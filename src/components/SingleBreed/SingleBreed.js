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
    <div className='desktop:mb-20 desktop:ml-20 desktop:mr-20 desktop:mt-5'>
        <div className='desktop:flex desktop:justify-around'>
            <div className='image '>
                    <img 
                        className='desktop:h-96 desktop:w-96 desktop:rounded-3xl desktop:object-cover desktop:bg-light-brown'
                        src={product.image?.url}
                        alt="catimage" 
                    />
            </div>
            <div className='desktop:ml-20 desktop:w-601'>
                <h1 className='desktop:p-6'>{product.name}</h1>
                <p className='desktop:p-6'>
                    {product.description}
                </p>
                <div className='desktop:flex desktop:flex-col'>
                    <RatingDetail isText className="temperament desktop:p-6" title="temperament" value={product.temperament}/>
                    <RatingDetail isText className="origin desktop:p-6" title="origin" value={product.origin}/>
                    <RatingDetail isText className="lifespan desktop:p-6" title="lifespan" value={product.life_span}/>
                    <RatingDetail className="adaptability desktop:p-6" title="Adaptability" value={product.adaptability}/>
                    <RatingDetail className="affection desktop:p-6" title="Affection" value={product.affection}/>
                    <RatingDetail className="friendly desktop:p-6" title="child_friendly" value={product.child_friendly}/>
                    <RatingDetail className="grooming desktop:p-6" title="grooming" value={product.grooming}/>
                    <RatingDetail className="intelligence desktop:p-6" title="intelligence" value={product.intelligence}/>
                    <RatingDetail className="health desktop:p-6" title="health" value={product.health_issues}/>
                    <RatingDetail className="social desktop:p-6" title="social" value={product.social_needs}/>
                    <RatingDetail className="stranger desktop:p-6" title="stranger" value={product.stranger_friendly}/>
                </div>
            </div>
        </div>
        <div className='desktop:mt-20 desktop:mb-20'>
            <h1>Other Photos</h1>
            <div className='desktop:grid desktop:grid-cols-4 desktop:gap-8 desktop:pt-10'>
                {
                    others.map((other) => (
                        <div>
                            <img className="desktop:h-71 desktop:w-71 desktop:bg-cover desktop:rounded-3xl" src={other.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SingleBreed