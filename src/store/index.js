import { configureStore } from '@reduxjs/toolkit';
import { REST_COUNTRIES_REDUCER } from './countries.slice';
export * from './countries.slice';

export const store = configureStore({
 reducer: {
  countries: REST_COUNTRIES_REDUCER
 }
});
