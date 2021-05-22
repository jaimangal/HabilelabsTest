import axios from 'axios';
/* Constants */
export const SET_ITEMS_LIST = 'SET_ITEMS_LIST';
export const SET_ALL_CURRENT_ITEMS_LIST = 'SET_ALL_CURRENT_ITEMS_LIST';

/* Actions */

/**
 * This action call for set items list.
 *
 * @type {boolean}
 */
export function setListItems(list) {
 return {
  type: SET_ITEMS_LIST,
  payload: list,
 };
}

/**
 * This action call for set items list.
 *
 * @type {boolean}
 */
export function setAllCurrentItemsList(list) {
 return {
  type: SET_ALL_CURRENT_ITEMS_LIST,
  payload: list,
 };
}

/**
 * This method call for items list.
 *
 * @para {number} startIndex
 *
 */
export const getItems = (startIndex) => {
 return (dispatch) => {
  return axios({
   url: `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${10}`,
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'get',
  })
   .then((response) => {
    dispatch(setListItems(response.data));
    dispatch(setAllCurrentItemsList(response.data));
   })
   .catch((error) => {
    console.log('Error in api call', error);
   });
 };
};

/* initialize state for reducers */
export const initialState = {
 itemList: null,
 allCurrentItems: null,
};

/* switching actions */
const ACTION_HANDLERS = {
 [SET_ITEMS_LIST]: (state, action) => {
  return {
   ...state,
   itemList: action.payload,
  };
 },
 [SET_ALL_CURRENT_ITEMS_LIST]: (state, action) => {
  return {
   ...state,
   allCurrentItems: action.payload,
  };
 },
};

/**
 * app reducer
 *
 * @type {object} state
 * @type {funcrion} action
 */
export default function appReducer(state = initialState, action) {
 const handler = ACTION_HANDLERS[action.type];
 return handler ? handler(state, action) : state;
}
