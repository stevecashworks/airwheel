import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import navSlice from './navSlice';
import scrollSlice from './scrollSlice';
const state=configureStore({
    reducer:{
        nav:navSlice,
        scroll:scrollSlice,
        user:userSlice
    }
})
export default state;
