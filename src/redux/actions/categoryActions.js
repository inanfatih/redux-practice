import * as actionTypes from './actionTypes';

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function getCategories() {
  return function(dispatch) {
    //Asagidaki sekilde debugger koyarak debug edebilirsin. Fakat debug edebilmek icin chrome'da F12'ye basmis olmak gerekiyor. Yani developer mode'u acmis olmak gerek.
    //    debugger;
    let url = 'http://localhost:3000/categories';
    //asagidaki sekilde response.json() fonksiyonu ile string, json'a donusturuluyor
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)));
  };
}
