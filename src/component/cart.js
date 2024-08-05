import { useSelector } from "react-redux"
import CartItem from "./cartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  
  const cartItem = useSelector((state) => state.cart.items);
  const clearDispatch = useDispatch();
  const clearBtn = ()=> {
    clearDispatch(clearCart())
  }
  
    return (
      <div className="text-center my-3">
          <div className=" font-extrabold text-orange-400 text-2xl"> Cart </div>
          <button className="border border-solid bg-black text-white w-20 my-2 p-1 rounded-lg" onClick={clearBtn}>remove</button>
          {cartItem.map((item,idx)=> <CartItem key={idx} card={item} />)}
      </div>
      
    )
}

export default Cart 