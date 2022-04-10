import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
                console.log("newprod", newProd)
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
            <div className='image'>
                {/* width: 371.04px;
                    height: 371.04px; */}
                <img 
                    className='h-96 w-96 rounded-3xl object-cover'
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
                    <strong className="temperament p-6">temperament: {product.temperament}</strong>
                    <strong className="origin p-6">origin: {product.origin}</strong>
                    <strong className="lifespan p-6">lifespan: {product.life_span}</strong>
                    <strong className="adaptability p-6">adaptability: {product.adaptability}</strong>
                    <strong className="affection p-6">affection: {product.affection}</strong>
                    <strong className="friendly p-6">child friendly: {product.child_friendly}</strong>
                    <strong className="grooming p-6">grooming: {product.grooming}</strong>
                    <strong className="intelligence p-6">intelligence: {product.intelligence}</strong>
                    <strong className="health p-6">health issues: {product.health_issues}</strong>
                    <strong className="social p-6">social needs: {product.social_needs}</strong>
                    <strong className="stranger p-6">stranger friendly: {product.stranger_friendly}</strong>
                </div>
            </div>
        </div>

        {/* second section */}
        {/* other images */}
    </div>
    // <div>
    //     <p>{product.name}</p>
    // </div>
  )
}

export default SingleBreed