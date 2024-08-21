import { createStore } from 'redux';
import reducer from './reducer'; 

export const cart = createStore(reducer);
