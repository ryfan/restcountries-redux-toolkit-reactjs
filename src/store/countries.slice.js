import { createSlice } from '@reduxjs/toolkit';
import {
 doGetAllCountries,
 doGetDetailCountries
} from './countries.asyncAction';

/**
 * @author Ryfan <me@ryfanai.com>
 */

/**
 * @typedef initialStateModel
 * @type {Object}
 * @property {'IDLE'|'SUCCESS'|'FAILED'|'LOADING'} status_GET
 * @property {'IDLE'|'SUCCESS'|'FAILED'|'LOADING'} status_DETAIL
 */

/**
 * @type {initialStateModel} initialState
 */

const initialState = {
 status_GET: 'IDLE',
 status_DETAIL: 'IDLE',
 list: []
};

export const rest_countries_slice = createSlice({
 name: 'RESTCOUNTRIES',
 initialState,
 reducers: {
  resetState(state) {
   state = initialState;
   return state;
  },
  resetStatus(state, action) {
   switch (action.type) {
    case 'status_GET':
     state.status_GET = 'IDLE';
     break;
    case 'status_DETAIL':
     state.status_DETAIL = 'IDLE';
     break;
    default:
     state.status_GET = 'IDLE';
     state.status_DETAIL = 'IDLE';
     break;
   }
   return state;
  }
 },
 extraReducers: (builder) =>
  builder
   .addCase(doGetAllCountries.pending, (state) => {
    state.status_GET = 'LOADING';
   })
   .addCase(doGetAllCountries.fulfilled, (state, action) => {
    state.status_GET = 'SUCCESS';
    state.list = action.payload;
   })
   .addCase(doGetAllCountries.rejected, (state, action) => {
    state.status_GET = 'FAILED';
   })
   .addCase(doGetDetailCountries.pending, (state) => {
    state.status_DETAIL = 'LOADING';
   })
   .addCase(doGetDetailCountries.fulfilled, (state, action) => {
    state.status_DETAIL = 'SUCCESS';
   })
   .addCase(doGetDetailCountries.rejected, (state, action) => {
    const { message } = action.payload;
    state.status_DETAIL = 'FAILED';
    state.message = message;
   })
});

export const {
 reducer: REST_COUNTRIES_REDUCER,
 actions: REST_COUNTRIES_ACTION
} = rest_countries_slice;
