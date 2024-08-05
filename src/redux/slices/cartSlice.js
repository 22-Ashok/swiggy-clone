import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push({...action.payload,index:state.items.length})
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter((e) => e.index !== action.payload)                       //need to learn here ....
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
})

export const{ addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer 