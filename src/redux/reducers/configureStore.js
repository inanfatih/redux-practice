import { createStore } from 'redux';
import rootReducer from './index';
//Asagidaki fonksiyonla store configure edildi
export default function configureStore() {
  return createStore(rootReducer);
}
