import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/categories';
import book from './Books/allbooks';

const rootReducer = combineReducers({
  book,
  categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
