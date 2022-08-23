import axios from 'axios';
import { api } from '../utils/Apis/api';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

/**
 * returns {*} a response for the initialSatte w.r.t the action from an async function
 * createAsyncThunk : API reference
 * axios : API call
 */
export const fetchData = createAsyncThunk('updatta/fetchData', async () => {
  try {
    const response = await axios.get(api.getApiUserData);
    return response.data.slice(0, 16);
  } catch (error) {
    console.log('error', error);
  }
});

/**
 * updateChatMessage : Reducer
 * updateChatMessages : Reducer
 * updatedChatMessageTime : Reducer
 * extraReducers : Object used for api calling on a purpose of keep the full control over the lifecycle of api
 */
const apiSlice = createSlice({
  name: 'updateData',
  initialState: {
    data: [],
    loading: null,
    updatedTime: '',
    msg: '',
    msgs: [],
  },
  reducers: {
    updateChatMessage: (state, action) => {
      console.log('updateChatMessage', action, state)
      state.msg = action.payload;
    },
    updateChatMessages: (state, action) => {
      state.msgs.push(action.payload);
    },
    updatedChatMessageTime: (state, action) => {
      state.updatedTime = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: state => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchData.rejected]: state => {
      state.loading = false;
    },
  },
});

/**
 * export the reducers as an action to another component
 */
export const {
  updateChatMessage,
  updateChatMessages,
  updatedChatMessageTime
} = apiSlice.actions;

export default apiSlice.reducer;