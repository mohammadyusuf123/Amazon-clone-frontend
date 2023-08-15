/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState={
     products:[],
     productNumber:0
}
export const  cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           //check if any product in array
           const addProductExist=state.products.find((product)=>product.id===action.payload.id)
           if (addProductExist) {
            addProductExist.quantity += parseInt(action.payload.quantity)
           } else {
            state.products.push({...action.payload, quantity:parseInt(action.payload.quantity)})
           }
           state.productNumber=state.productNumber + parseInt(action.payload.quantity)
        },
        removeFromCart:(state,action)=>{
           //find the product we want to remove from array
           const productToRemove=state.products.find((product)=>product.id===action.payload)
           //remove the quantity from total  product quantity
         state.productNumber = state.productNumber -  productToRemove.quantity
           //find the index number
            const index= state.products.findIndex((product)=>product.id===action.payload)
           //remove the product from array
           state.products.splice(index,1)
        },
        incrementInCart: (state, action) => {
          const itemInc = state.products.find((item) => item.id === action.payload);
          if (itemInc.quantity >= 1) {
            itemInc.quantity = itemInc.quantity + 1;
          }
          state.productNumber = state.productNumber + 1;
        },
        decrementInCart: (state, action) => {
          const itemDec = state.products.find((item) => item.id === action.payload);
          if (itemDec.quantity === 1) {
            const index = state.products.findIndex(
              (item) => item.id === action.payload
            );
            state.products.splice(index, 1);
          } else {
            itemDec.quantity--;
          }
          state.productNumber = state.productNumber - 1;
        },
    }
})

export const {addToCart,removeFromCart,incrementInCart,decrementInCart}=cartSlice.actions
export default cartSlice.reducer