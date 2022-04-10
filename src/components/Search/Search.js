import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useMatch, useParams } from 'react-router-dom';
import { AppContext } from '../../hooks/IdContext';

export default function Search({searchTerm, handleSearch}) {
  const { ids, setIds, single, setSingle } = useContext(AppContext)
  const baseURL = process.env.REACT_APP_BASE_URL
  const idUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=${ids}&api_key=${process.env.REACT_APP_API_KEY}"
  const [searchBreed, setSearchBreed] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setSearchBreed(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  
  useEffect(() => {
    axios.get(idUrl).then((res) => {
      setSingle(res.data)
      setIds(res.data)
    })
  }, [])
  return (
    <div className="">
      {/* TODO: redirect to cat wiki of a cat's breed when searched */}
      <input 
          className='border shadow-sm border-slate-300 rounded-3xl text-center outline-0 w-72 h-16'
          placeholder='flex for cat breed'
          onChange={handleSearch}
      />
          {searchTerm.length !=0 && (
          <div className='mt-1.5 data w-80	h-52 bg-white overflow-hidden	overflow-y-auto absolute rounded-3xl p-5'	>
          {searchBreed.filter((post) => {
            if (searchTerm == "") {
              return post
            } else if (post.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return post
            }
          }).map((post) => (
            <Link to={`/${ids}`}>
              <button 
                className='search-breed'
                onClick={() => { 
                  setIds(post.id)
                  setSingle(post)
                  console.log("rv", ids)
                  console.log("single", single)
                }}
              >
                {post.name}
              </button>
            </Link>
          ))}
          </div>
      )}
    </div>
  );
  // widht: 394px
  // height 219px
}