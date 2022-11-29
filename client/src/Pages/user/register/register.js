import './register.css';
import styled from 'styled-components';
import { useRef } from 'react';
import { LoginContainer as RegisterContainer,Btn,Inp } from '../login/login';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addError, clearErrors, selectError, selectIsVisible,setIsVisible,selectUser } from '../../../redux/userSlice';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa' 
 
export const ErrorsCon=styled.div`
 background-color:rgb(238, 195, 202,0.5);
 width:80%;
 display:flex;
 flex-direction:column;
 align-items:center;
 margin:5px;

 `
  export const ErrorDetails=styled.p`
    color:gray;
    font-size:12px;    
  `
  export const PassWordWrapper=styled.div`
  display:flex;
  width:250px;
  padding:5px;
  justify-content:space-between;
  border:1px solid black;
  align-items:center

  `
 
 
 const  Register=()=>{
  const navigate=useNavigate
    const dispatch=useDispatch()
    const isVisible=useSelector(selectIsVisible)
    const EyeIcon=isVisible?FaRegEye:FaRegEyeSlash
    const slowErr=(message)=>{
      setTimeout(()=>{dispatch(addError(message))},500)
    }
    const errors=useSelector(selectError)
    const user =useSelector(selectUser)
    if(user){
      navigate('/')
    }
     const nameRef=useRef(null);
     const emailRef=useRef(null)
     const passwordRef=useRef(null)
     const password2Ref=useRef(null);
     const getVal=ref=>ref.current.value;
     const register=(e,...info)=>{
      e.preventDefault()
      const [name,email,pass1,pass2]=info 
     dispatch(clearErrors());
     if(pass1!==pass2){
slowErr('Oops password mismatch ')
     }
     else if(pass1.length<6){
      slowErr('Password must be at least 6 characters long')
           } 
     
     else{
        console.log(name,email,pass1,pass2)
     }
      if(errors.length===0){
        fetch('http://localhost:5000/api/v1/user/register',{
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({name,email,password:pass1})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.success){
            localStorage.setItem("airwheel",data.message.token)
          }
        })
        .catch(err=>{console.log(err)})
      }
        
     }
 return(
 <RegisterContainer onSubmit={(e)=>{register(e,getVal(nameRef),getVal(emailRef),getVal(passwordRef),getVal(password2Ref))}}>
 <h1>Register</h1>
 <Inp ref={nameRef} placeholder='Username' required></Inp>
 <Inp ref={emailRef} placeholder='Email' type='email' required/>
<PassWordWrapper>
 <Inp ref={passwordRef} style={{border:'none',outline:'none'}} required placeholder='Password' type={isVisible?'text':'password'}></Inp>
   <EyeIcon onClick={()=>{dispatch(setIsVisible(!isVisible))}}/>
   </PassWordWrapper> 
   <PassWordWrapper>
 <Inp ref={password2Ref} style={{border:'none',outline:'none'}} required placeholder='Re-type password' type={isVisible?'text':'password'}></Inp>
   <EyeIcon onClick={()=>{dispatch(setIsVisible(!isVisible))}}/>
   </PassWordWrapper>
 {errors.length>0&&(
   errors.map(error=><ErrorsCon>
      <ErrorDetails>{error}</ErrorDetails>
   </ErrorsCon>)
 )}
   <Btn type="submit">Register</Btn>
   </RegisterContainer>
 )
 }
 export default Register