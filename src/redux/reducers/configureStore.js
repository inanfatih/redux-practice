import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
//Asagidaki fonksiyonla store configure edildi
export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
