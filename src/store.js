import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// la creation d'un store qui point sur un masse de reducers