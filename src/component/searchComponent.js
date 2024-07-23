import { useState } from "react"

const SearchComponent = ( {setFilteredRestaurants,filteredRestaurants,data} )=>{
    const [search, setSearch] = useState("");

    function searchBYName(){
        const searchResturant= data.filter((e)=> e.info.name.toLowerCase().includes(search.toLowerCase()) );

       if(searchResturant.length!=0){
        return setFilteredRestaurants(searchResturant);
       }
      return setFilteredRestaurants(data)
    }

    return (
        <div className="mt-4">
             <input type="text" placeholder="search for food" className="border-2 border-solid w-96 border-black pl-1 rounded-lg" value={search} onChange={e=> setSearch(e.target.value)}></input>
             <button className="ml-12 border border-solid border-black w-20 h-8 rounded-lg" onClick={searchBYName}>Search</button>
        </div>
    )
}

export default SearchComponent