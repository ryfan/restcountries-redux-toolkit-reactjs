import { useDispatch, useSelector } from 'react-redux';
import {
 doGetAllCountries,
 doGetDetailCountries
} from '../store/countries.asyncAction';
import { REST_COUNTRIES_ACTION } from '../store/countries.slice';

/**
 * @author Ryfan <me@ryfanai.com>
 */

export const useRestCountries = () => {
 const state = useSelector((state) => state.countries);

 const dispatch = useDispatch();

 const getAllCountries = () => {
  dispatch(doGetAllCountries());
 };

 /**
  * @description For get name param
  * @param {Object} param
  * @param {Object} param.name
  */
 const getDetailCountries = (param) => {
  dispatch(doGetDetailCountries(param));
 };

 const resetState = () => {
  dispatch(REST_COUNTRIES_ACTION.resetState());
 };

 const resetStatus = () => {
  dispatch(REST_COUNTRIES_ACTION.resetStatus());
 };

 return {
  state,
  getAllCountries,
  getDetailCountries,
  resetState,
  resetStatus
 };
};
