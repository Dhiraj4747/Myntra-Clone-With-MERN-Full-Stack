import {createSlice } from "@reduxjs/toolkit"

const BagSlice = createSlice({
   name:"BagSlice",
   initialState:[],
   reducers:{
      addToBag:(state,action)=>{
         state.push(action.payload)
      },
      removeFromBag:(state,action)=>{
         return state.filter(itemId => itemId !== action.payload)
      }
   }
})

export default BagSlice;
export const BagSliceAction = BagSlice.actions