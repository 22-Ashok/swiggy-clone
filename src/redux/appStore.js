import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from './slices/cartSlice'

const appStore = configureStore({

    reducer:{
       cart:cartItemsReducer
    }
})

export default appStore