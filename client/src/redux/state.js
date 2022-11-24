import {configureStore} from '@reduxjs/toolkit';
import errorsSlice from './errorsSlice';
import navSlice from './navSlice';
import scrollSlice from './scrollSlice';
const state=configureStore({
    reducer:{
        nav:navSlice,
        scroll:scrollSlice,
        error:errorsSlice
    }
})
export default state;
