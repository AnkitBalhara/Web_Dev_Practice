import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/createSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use "counter" as the key for this slice
  },
});


// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../counter/createSlice'

// export const store = configureStore({
//   reducer: counterReducer ,
// })