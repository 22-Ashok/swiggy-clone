import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/component/header'
import Body from './src/component/body'
import About from './src/component/about'
import Contact from './src/component/contact'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './src/component/error'
import RestaurantDetail from './src/component/restaurantDetail'
import Cart from './src/component/cart'
import { Provider } from 'react-redux'
import appStore from './src/redux/appStore'

const App = ()=>{

    return (
        <Provider store={ appStore }>
             <div>
              <Header />
              <Outlet />
           </div>
        
        </Provider>
           
    )
}

const router = createBrowserRouter([{
    path:'/',
    element:<App />,
    children:[
     {
         path:'/',
         element:<Body />
     },
     {
         path:'/about',
         element:<About />
     },
     {
         path:'/contact',
         element:<Contact />
     },
     {
        path:"/resturant/:restaurantid",
        element:<RestaurantDetail />
     },{
        path:"/cart",
        element:<Cart />
     }
  ],
    errorElement:<Error />
}
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)
