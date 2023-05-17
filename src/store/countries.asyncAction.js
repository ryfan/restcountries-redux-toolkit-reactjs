import { GetAll, GetDetail } from '../datasource/RestCountries';

const { createAsyncThunk } = require('@reduxjs/toolkit');

/**
 * @author Ryfan <me@ryfanai.com>
 */

const doGetAllCountries = createAsyncThunk(
 'RESTCOUNTRIES/get',
 async (param, { rejectWithValue }) => {
  try {
   const dataResponse = await GetAll(param);
   return dataResponse;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

const doGetDetailCountries = createAsyncThunk(
 'RESTCOUNTRIES/detail',

 /**
  * @description For duplicate payload
  * @param {Object} param
  * @param {Number} param.name
  */
 async (param, { rejectWithValue }) => {
  try {
   const dataResponse = await GetDetail(param?.name);
   return dataResponse;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

export { doGetAllCountries, doGetDetailCountries };
