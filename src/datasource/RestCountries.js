import { apiFetch } from '../utils/mainapifetch';
import { endpoints } from './endpoints';

export async function readData(endpoint, queries) {
 const fetchOptions = {
  method: 'GET',
  headers: {
   'Content-type': 'application/json'
  }
 };
 return await apiFetch(endpoint, queries, fetchOptions);
}

export async function GetAll(queries) {
 return await readData(endpoints.ALL_COUNTRIES, queries);
}

export async function GetDetail(queries) {
 return await readData(`${endpoints.DETAIL_COUNTRIES}/${queries}`);
}
