import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useMatch, useParams, useSearchParams } from 'react-router-dom'
import { AppContext } from '../hooks/IdContext'

const Test = () => {
    const {ids, setIdsm, single, setSingle} = useContext(AppContext)
    // const [product, setProduct] = useState()
    const id = useParams().id
    console.log("id", id)
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              console.log("res error");
            }
          })
            .then((res) => {
                setSingle(res)
            })
    }
    console.log("prod", single)
  return (
    <div>
        {/* <p>test: {match.params}</p> */}
        {/* <p>testing: {id}</p> */}
        {/* <p>testing:
            {
                single.map((s) => {
                    console.log(s.id === id)
                })
            }
        </p> */}
        {/* <p>{console.log("first", product.url)}</p> */}
        {/* <p>testing{index.name}</p> */}
    </div>
  )
}

export default Test