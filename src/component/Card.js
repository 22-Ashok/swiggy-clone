import { Link } from 'react-router-dom' 

const Card = ({card_data})=>{
    
   const { name, cuisines, avgRating, areaName, cloudinaryImageId, id , sla } = card_data.info; 
   
   const imgCdn="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"   

    return (
        <Link to={"/resturant/"+id}>
        <div className="w-60 mx-3 h-64 border border-solid hover:shadow-xl mb-6 rounded-xl hover:bg-[#f0f0f0]">
            <div className="resturant-img">
                <img src={`${imgCdn}${cloudinaryImageId}`}  alt="img" className="h-32 w-60 object-cover rounded-xl" ></img>
            </div>
            <div className="pl-4 leading-6 py-2 ">
               <div className="font-bold text-[18px]">{name}</div>
               <div className="font-semibold text-[16px]"> <span className="mr-5">{avgRating}rating</span> <span className="">{sla.deliveryTime}mins</span> </div>
               <div className="overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(',')}</div>
            </div>
        </div>
        </Link>
    )
}


export default Card 

