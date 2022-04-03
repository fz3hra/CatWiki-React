import { useEffect } from 'react'
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai'


const CatCard = ({posts, setPosts, loading, setLoading}) => {
  const baseURL = "https://api.thecatapi.com/v1/breeds?api_key=cef8de37-19fb-480a-8a09-5d5f6180393a&limit=4"

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
        <div className='flex flex-row justify-end items-center'>
          {/* TODO: most searched cat breed: top 10 */}
          <p className='seeMore p-4'><a href="/">See More </a></p>
          <a href=""><AiOutlineArrowRight /></a>
        </div>
        
        {/* Subtitle */}
        {/* See more */}
      <div
        className='grid grid-cols-4 gap-4 h-40 p-2'
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