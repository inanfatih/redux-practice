import * as actionTypes from './actionTypes';

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getProducts(categoryId) {
  return function(dispatch) {
    //Asagidaki sekilde debugger koyarak debug edebilirsin. Fakat debug edebilmek icin chrome'da F12'ye basmis olmak gerekiyor. Yani developer mode'u acmis olmak gerek.
    //    debugger;
    let url = 'http://localhost:3000/products';

    if (categoryId) {
      url = url + '?categoryId=' + categoryId;
    }
    //asagidaki sekilde response.json() fonksiyonu ile string, json'a donusturuluyor
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
