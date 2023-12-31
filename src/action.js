// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer);

