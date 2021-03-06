import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

//1 reducer sadece 1 state i yonetir bu yuzden burayi tekrar tekrar degistirmek gerekmez

export default function changeCategoryReducer(
  state = initialState.currentCategory,
  action,
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
