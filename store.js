import { configureStore } from '@reduxjs/toolkit';
import txtSlice from './src/slice/textslice'; // Import your combined reducers
import selected from './src/slice/selectedslice';

const store = configureStore({
  reducer:{
    textSlice:txtSlice,
    selected:selected,
  },
});

export default store;
