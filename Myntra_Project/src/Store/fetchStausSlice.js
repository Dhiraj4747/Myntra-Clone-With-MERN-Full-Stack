import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
   name:"fetchstaus",
   initialState:{
      fetchDone:false,
      currentlyFetching:false
   },
   reducers:{
      markFetchDone:(state)=>{
         state.fetchDone=true;
      },
      markFetchingStarted:(state)=>{
         state.currentlyFetching=true;
      },
      markFetchingFinished:(state)=>{
         state.currentlyFetching=false;
      },
   }
})
export default fetchStatusSlice;
export const fetchSliceAction = fetchStatusSlice.actions