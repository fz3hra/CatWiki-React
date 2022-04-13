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
    <div className='desktop:bg-stone-300 desktop:h-300 desktop:rounded-b-3xl'>
        {/* title */}
        <div className='desktop:ml-10'>
          <p className='cardTitle desktop:p-4'>Most Searched Breeds</p>
          <h1 className='cardSubTitle desktop:p-4'>66+ Breeds For You to discover</h1>
        </div>
        {/* 50px right and bottom 10px */}
        <div className='desktop:flex desktop:flex-row desktop:justify-end desktop:items-center desktop:mr-12 desktop:mb-2.5'>
          {/* TODO: most searched cat breed: top 10 */}
          {/* <Link to="most-searched">
            <MostSearched />
          </Link> */}
          <NavLink to="most-searched" className="seeMore desktop:p-4">See more</NavLink>
          <a href=""><AiOutlineArrowRight /></a>
        </div>
        
        {/* Subtitle */}
        {/* See more */}
      <div
        className='desktop:grid desktop:grid-cols-4 desktop:gap-4 desktop:h-40 desktop:p-2 desktop:ml-20 desktop:mr-10'
      >
        {posts.map((post) => (
          <div>
            <img className='desktop:object-cover desktop:h-48 desktop:w-56 desktop:rounded-lg' key={post.id} src={post.image.url}/>
            <h1 className='desktop:pt-5'>{post.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatCard