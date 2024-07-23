import { useState, useEffect } from 'react'

const useOnlineStatus = ()=> {

    const [isOnline, setIsOnline] = useState(true);

    function handleOnline(){
        setIsOnline(true);
    }

    function handleOffline(){
        setIsOnline(false)
    }

    useEffect(()=>{
      window.addEventListener('online',handleOnline);
      window.addEventListener('offline',handleOffline)

      // return ()=>{               // this is third arrgument in which we return function which while execute after first re-render. 
      //   window.removeEventListener('online',handleOnline);
      //   window.removeEventListener('offline',handleOffline);
      // }

    },[])

    return isOnline
}

export default useOnlineStatus 

