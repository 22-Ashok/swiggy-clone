import { useState, useEffect } from 'react'
import Card from './Card'
import StarRating from './starRating'
import SearchComponent from './searchComponent'
import SimmerComponent from './simmerComponent'

const Body = ()=>{

    const [data,setData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]) 

    /* fetch data from api */ 
    async function fetchData(){
         const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7006738&lng=76.9275744&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchData.json();
        var arr=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setData(arr);
        setFilteredRestaurants(arr);
     }

        if(filteredRestaurants.length == 0) {
            return <SimmerComponent />
        }

        return (
            <div className=" mx-[15%]">
                <SearchComponent setFilteredRestaurants={setFilteredRestaurants } filteredRestaurants={filteredRestaurants} data={data} />
                <StarRating data={data} setFilteredRestaurants={setFilteredRestaurants} />
                <div className="flex flex-wrap">
                   { filteredRestaurants.map(e=> <Card card_data={e} /> ) }
                </div>

            </div>
        )  
}


export default Body

