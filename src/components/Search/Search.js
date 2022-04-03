import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Search({searchTerm, handleSearch}) {
  const baseURL = "https://api.thecatapi.com/v1/breeds?api_key=cef8de37-19fb-480a-8a09-5d5f6180393a"
  const [searchBreed, setSearchBreed] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setSearchBreed(res.data)
      console.info("review", res.data)
    })
    .catch((err) => {
      console.log(err);
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
              <p className=''>{post.name}</p>
          ))}
          </div>
      )}
    </div>
  );
  // widht: 394px
  // height 219px
}