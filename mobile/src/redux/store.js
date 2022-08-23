import apiReducer from './reducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

/**
 * return a store with reducers
 * serializableCheck : flase, as after the api call most the data are being rectified as non-serialized 
 */
const Store = configureStore({
  reducer: {
    dataReducer: apiReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default Store;
