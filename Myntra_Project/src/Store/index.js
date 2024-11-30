import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStausSlice';
import BagSlice from './bagSlice';

const MyntraStore = configureStore({
   reducer:{
      items:itemSlice.reducer,
      fetchstatus: fetchStatusSlice.reducer,
      bag: BagSlice.reducer
   }
})

export default MyntraStore;