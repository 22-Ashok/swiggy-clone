const StarRating = ({data,setFilteredRestaurants})=>{

    /* filter 4+ resturant*/ 
    function topResturant(){
        const newData = data.filter(e=> e.info.avgRating > 4);
        setFilteredRestaurants(newData);
     }

        /* remove 4+ rating  */
        function removeRatting(){
            setFilteredRestaurants(data);
    
         }

    return (
        <div class="four-star-rating">
                   <button className="border border-solid border-black w-24 rounded-lg mr-12 my-6" onClick={topResturant}>4+ rating</button>
                   <button onClick={removeRatting} className="border border-solid border-black w-24 rounded-lg" >See All</button>
                </div>
    )
}


export default StarRating
