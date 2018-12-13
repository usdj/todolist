import { createStore } from 'redux';
import redux from './reducer';

const store = createStore(redux);

export default store;