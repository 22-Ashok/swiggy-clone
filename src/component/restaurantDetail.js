import { useState } from 'react'
import { useParams } from 'react-router-dom';
import useMenuFetch from '../utilis/useMenuFetch';
import ResturantCategory from './resturantCategory'

const RestaurantDetail = ()=>{
  const[showIndex,setShowIndex] = useState();
  const { restaurantid } = useParams();
  const detailOfRestaurant = useMenuFetch(restaurantid);
  
  if(detailOfRestaurant.length==0){
    return <h1>loading...</h1>
  }

  const { name, id, avgRating, areaName, costForTwoMessage, totalRatingsString, cuisines, sla, expectationNotifiers } = detailOfRestaurant[2].card.card.info;
  // need to improve
  const resturantManuData =  detailOfRestaurant[4].groupedCard.cardGroupMap.REGULAR.cards.filter((e)=>{
    return e.card.card['@type'] ===	"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  }); 

  

    return (
      <div className="mx-[30%] mt-8 ">
        <div className="font-extrabold text-2xl">{ name }</div>
        <div className="mt-7 border border-solid rounded-lg shadow-lg p-4 leading-[30px]">
          <div className="">
            <span className="font-bold">{`${avgRating}(${totalRatingsString})`}</span> <span className="font-bold">{costForTwoMessage}</span>
           </div>
           <div className="text-red-700">{cuisines}</div>
           <div className="">Outlet <span className="">{areaName}</span> </div>
           <div className="">{sla.slaString}</div>
           <hr className=""></hr>
        </div>

        {/*  menu component will be here   //make a seperate component..*/}
        <div className="text-lg font-bold my-3"> menu</div>
        {resturantManuData.map((e,i)=>(
          <ResturantCategory MenuData={e} showIndex={i==showIndex ? true : false} setShowIndex={()=> setShowIndex(i == showIndex ? null : i)} />
        ))}
        
      </div>
    )
}


export default RestaurantDetail

