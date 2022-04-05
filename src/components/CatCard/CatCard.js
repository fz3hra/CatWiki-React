import { useEffect } from 'react'
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai'
import MostSearched from '../MostSearched/MostSearched';
import { Link, NavLink } from 'react-router-dom';

const CatCard = ({posts, setPosts, loading, setLoading}) => {
  const baseURL = process.env.REACT_APP_BASE_URL_LIMIT
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPosts(res.data)
      console.info("review", res.data)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [])
  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <div className='bg-stone-300 h-128 rounded-b-3xl'>
        {/* title */}
        <p className='cardTitle p-4'>Most Searched Breeds</p>
        <h1 className='cardSubTitle p-4'>66+ Breeds For You to discover</h1>
        {/* 50px right and bottom 10px */}
        <div className='flex flex-row justify-end items-center mr-12 mb-2.5'>
          {/* TODO: most searched cat breed: top 10 */}
          {/* <Link to="most-searched">
            <MostSearched />
          </Link> */}
          <NavLink to="most-searched" className="seeMore p-4">See more</NavLink>
          <a href=""><AiOutlineArrowRight /></a>
        </div>
        
        {/* Subtitle */}
        {/* See more */}
      <div
        className='grid grid-cols-4 gap-4 h-40 p-2 ml-10 mr-10'
      >
        {posts.map((post) => (
          <div>
            <img className='object-cover h-48 w-96 rounded-lg' key={post.id} src={post.image.url}/>
            <h1>{post.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatCard