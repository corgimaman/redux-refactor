//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { reducer } from './reducers';

export default createStore(
    reducer,
);