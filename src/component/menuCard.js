import { imgCdn } from '../utilis/constant'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const MenuCardList = ({card})=>{

   // const{name,price,imageId,id,defaultPrice} = card?.card?.info;
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
        e.stopPropagation();
        dispatch(addItem(card));
   }

    return (
        <div className="flex justify-between px-3 border-b-2 border-gray-500 py-2 " key={card.card.info.id}>
            <div className="w-9/12">
             <h1 className="text-xl font-bold">{card.card.info.name}</h1>
             <h3 className="font-semibold text-lg">₹{card.card.info.price/100 || card.card.info.defaultPrice/100}</h3>
            </div>
            <div className="w-3/12 relative">
                <img src={imgCdn+card.card.info.imageId} className="block w-full"></img>
                <button className="bg-black text-white rounded-md absolute bottom-0 left-1/2 w-14 h-7" onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}

export default MenuCardList

