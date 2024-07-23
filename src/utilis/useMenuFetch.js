import { useEffect, useState } from "react";
import { imgCdn, menuUrl } from "./constant";

 function useMenuFetch (resId){

    const [detailOfRestaurant, setDetailOfRestaurant] = useState([]);

   async function fetchMenuData(){
      const toFetch = await fetch(menuUrl+resId);
      const json = await toFetch.json();
      const detail = json.data.cards;
      return setDetailOfRestaurant(detail);
    }

  useEffect(()=>{
    fetchMenuData()
  },[])

  return detailOfRestaurant;
}

export default useMenuFetch