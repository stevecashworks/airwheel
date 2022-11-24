import { createSlice } from "@reduxjs/toolkit";
const initialState={errors:[]}
const errorSlice=createSlice({
 name:'errors',
 initialState,
 reducers:{
    addError:(state,action)=>{
        state.errors=[...state.errors, action.payload]
    },
    clearErrors:(state,action)=>{
            state.errors=[]
    }
 }
});
export const {addError,clearErrors}= errorSlice.actions
export const selectError= state=>state.error.errors
export default errorSlice.reducer
