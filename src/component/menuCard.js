import { imgCdn } from '../utilis/constant'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const MenuCardList = ({cards})=>{

    const{name,price,imageId,id,defaultPrice} = cards?.card?.info;
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
        e.stopPropagation();
        dispatch(addItem(cards));
   }

    return (
        <div className="flex justify-between px-3 border-b-2 border-gray-500 py-2 " key={id}>
            <div className="w-9/12">
             <h1 className="text-xl font-bold">{name}</h1>
             <h3 className="font-semibold text-lg">₹{price/100 || defaultPrice/100}</h3>
            </div>
            <div className="w-3/12 relative">
                <img src={imgCdn+imageId} className="block w-full"></img>
                <button className="bg-black text-white rounded-md absolute bottom-0 left-1/2 w-14 h-7" onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}

export default MenuCardList
