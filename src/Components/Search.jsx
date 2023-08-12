/* eslint-disable react/prop-types */
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { callApi } from './utils/callApi';
import { createSearchParams, useNavigate } from 'react-router-dom';
const Search = () => {
  const [suggestion,setSuggestion]=useState(null);
  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("All");
  
  const navigate=useNavigate()
  
  const getSuggestion = () => { 
    callApi('../../public/data/suggestions.json')
    .then((suggestionResult)=>{
       setSuggestion(suggestionResult)
    })
}
  useEffect(()=>{
     getSuggestion()
  },[])

  const onHandleSubmit = (e) => { 
    e.preventDefault();
    navigate({
pathname:"search",
search:`${createSearchParams({
  category:`${category}`,
  search:`${search}`
})}`
    })
    setSearch("")
    setCategory("All")
  }
  return (
    <div className="w-[100%]">
        <div className=" flex items-center h-10 bg-amazonclone-yellow rounded">
        <select className=' max-w-[auto] h-[40px] outline-4 outline-amazonclone-yellow  bg-gray-100 rounded-l text-gray-500 border text-xs xl:sm' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computer</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input className="flex grow items-center h-[100%] text-black placeholder:pl-3 outline-amazonclone-yellow " placeholder='Search Amazon' type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            
          <button className="w-[45px]" onClick={onHandleSubmit}> 
          <MagnifyingGlassIcon className="h-[25px] m-auto stroke-slate-900 " />
          </button>
         
        </div>
      {
        suggestion &&
        <div className=" bg-white text-black w-full z-40 absolute">
          {
            suggestion.filter((sug)=>{
              const currentSearch=search.toLocaleLowerCase()
              const title=sug.title.toLocaleLowerCase()
              return(
                currentSearch &&
                title.startsWith(currentSearch) &&
                title !==currentSearch
              )

            })
            .slice(0,10)
            .map((sug)=>(
              <div className="" key={sug.id} onClick={()=>setSearch(sug.title)}> 
                 {sug.title}
              </div>
            ))
          }
           
        </div>
      }
    </div>
  )
}

export default Search