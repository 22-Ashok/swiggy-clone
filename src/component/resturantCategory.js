import MenuCardList from "./menuCard";

const ResturantCategory = ({MenuData,showIndex,setShowIndex,i}) => {
    const{title,itemCards}=MenuData.card.card;

    const toggleFun = () => {
     return  setShowIndex();
    }

 return (
  
        <div className="bg-[#f0f0f0] cursor-pointer" key={title} onClick={toggleFun}> 
         <div className="  my-3 p-2 flex justify-between items-center min-h-16">
          <h1 className="font-bold text-lg" >{title}({itemCards.length})</h1>
          <span>{showIndex ? '🔼' : '🔽' }  </span>                      
         </div>

         {showIndex && itemCards.map((e)=> <MenuCardList card={e} /> )}
         
      </div>

 )
}

export default ResturantCategory