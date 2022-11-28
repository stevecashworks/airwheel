import './register.css';
import styled from 'styled-components';
import { useRef } from 'react';
import { LoginContainer as RegisterContainer,Btn,Inp } from '../login/login';
import { useDispatch, useSelector } from 'react-redux';
import { addError, clearErrors, selectError } from '../../../redux/userSlice';
 
 
export const ErrorsCon=styled.div`
 background-color:rgb(238, 195, 202,0.5);
 width:80%;
 display:flex;
 flex-direction:column;
 align-items:center;

 `
  export const ErrorDetails=styled.p`
    color:gray;
    font-size:12px;    
  `
 
 
 const  Register=()=>{
    const dispatch=useDispatch()
    const errors=useSelector(selectError)
    console.log(errors)
     const nameRef=useRef(null);
     const emailRef=useRef(null)
     const passwordRef=useRef(null)
     const password2Ref=useRef(null);
     const getVal=ref=>ref.current.value;
     const register=(name,email,pass1,pass2)=>{
     dispatch(clearErrors());
     if(pass1!==pass2){
        dispatch(addError('Oops password mismatch '))
     }
     else{
        console.log(name,email,pass1,pass2)
     } 
        
     }
 return(
 <RegisterContainer>
 <h1>Register</h1>
 <Inp ref={nameRef} placeholder='Username'></Inp>
 <Inp ref={emailRef} placeholder='Email'></Inp>
 <Inp ref={passwordRef} placeholder='Password' type='password'></Inp>
 <Inp ref={password2Ref} placeholder=' Confirm Password' type='password'></Inp>
 {(errors.length>0)&&<ErrorsCon>
   {errors.map(err=>{
      return <ErrorDetails>{err}</ErrorDetails>
   })}            
   </ErrorsCon>}
   <Btn onClick={()=>{register(getVal(nameRef),getVal(emailRef),getVal(passwordRef),getVal(password2Ref))}}>Register</Btn>
   </RegisterContainer>
 )
 }
 export default Register