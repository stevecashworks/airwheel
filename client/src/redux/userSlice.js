import { createSlice } from "@reduxjs/toolkit";
const initialState={errors:[],isLoading:false,isVisible:false,userData:null}
const userSlice=createSlice({
 name:'users',
 initialState,
 reducers:{
    addError:(state,action)=>{
        state.errors=[...state.errors, action.payload]
    },
    clearErrors:(state,action)=>{
            state.errors=[]
    },
    setIsLoading:(state,action)=>{
        state.isLoading=action.payload
    },
    setUser:(state,action)=>{
        state.userData=action.payload
    },
    setIsVisible:(state,action)=>{
        state.isVisible=action.payload
    }
 }
});
export const {addError,clearErrors,setIsLoading,setUser,setIsVisible}= userSlice.actions
export const selectError= state=>state.user.errors
export const selectIsLoading= state=>state.user.isLoading;
export const selectIsVisible=state=>state.user.isVisible
export const selectUser=state=>state.user.userData
export default userSlice.reducer
