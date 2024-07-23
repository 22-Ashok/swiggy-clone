import { Link } from 'react-router-dom'
import useOnlineStatus from '../utilis/useOnlineStatus'
import { useSelector } from 'react-redux';

const Header=()=>{
    const online = useOnlineStatus();
    const cartItemsCount = useSelector((state)=> state.cart.items);
    console.log(cartItemsCount);
    
    return (
        <div className="flex h-[6rem] w-full bg-[#f0f0f0] justify-between ">
            <div className="pl-20 h-[6rem] ">
                <img src="https://www.shutterstock.com/shutterstock/photos/2148585521/display_1500/stock-vector-chef-logo-design-vector-illustration-restaurant-logo-2148585521.jpg" alt="logo" className="object-cover w-[7rem] h-[6rem]  " />
            </div>

            <div className="navigation flex justify-between items-center pr-20 font-semibold text-lg">
                <li className="list-none mr-12"><Link to="/">Home</Link></li> 
                <li className="list-none  mr-12"><Link to="/about">About</Link></li> 
                <li className="list-none  mr-12">Sign Up</li> 
                <li className="list-none  mr-12"><Link to="/contact">Contact Us</Link></li>  
                <li className="list-none  mr-12"><Link to="/cart">Cart({cartItemsCount.length}items) </Link></li>      
                <li className="list-none  mr-12"> { online ? '🟢 online' : '🔴 offline'} </li> 
                </div>
        </div>
    )
}

export default Header 