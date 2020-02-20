import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

//1 reducer sadece 1 state i yonetir bu yuzden burayi tekrar tekrar degistirmek gerekmez

export default function productListReducer(
  state = initialState.products,
  action,
) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
