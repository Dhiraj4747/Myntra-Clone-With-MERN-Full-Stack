import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStausSlice';

const MyntraStore = configureStore({
   reducer:{
      items:itemSlice.reducer,
      fetchstatus: fetchStatusSlice.reducer
   }
})

export default MyntraStore;