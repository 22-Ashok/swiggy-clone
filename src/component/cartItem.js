import { useDispatch } from "react-redux";
import { imgCdn } from "../utilis/constant";
import { addItem, removeItem } from '../redux/slices/cartSlice'

const CartItem = ({ card }) => {
    const dispatch = useDispatch();
      const{ id, name, imageId, price, defaultPrice } = card?.card?.info

      const addCartItem = () => {
           dispatch(addItem(card))
       }

       const removeCartItem = () => {
        dispatch(removeItem(card.index))
       }

    return (
        <div className="flex justify-between items-center my-3 bg-[#f0f0f0] w-1/2 mx-auto left-0 right-0 rounded-md">
           <div className="pl-3 text-lg font-semibold">
              <div>{name}</div>
              <div>₹{price/100 || defaultPrice/100}</div>
           </div>

           <div>
           <div className="absolute"> 
              <button className="bg-black text-white rounded-md w-10 m1-2 bg-opacity-70" onClick={ addCartItem } >+</button>
              <button className="bg-black text-white rounded-md  w-10 bg-opacity-70" onClick={ removeCartItem }>-</button>
              </div>
              <img src={ imgCdn+imageId } className="h-20 w-40 rounded-md"></img>
           </div>
        </div>
    )
}

export default CartItem