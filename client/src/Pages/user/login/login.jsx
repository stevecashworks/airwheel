import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { addError, clearErrors, selectError,selectIsLoading,setIsLoading } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,setUser,selectIsVisible,setIsVisible } from '../../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa';
import './login.css'
import { ErrorsCon ,ErrorDetails,PassWordWrapper} from '../register/register';
 export const  LoginContainer=styled.form`
 margin:100px auto;
 width:300px;
 min-height:400px;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; border-radius:30px;
 padding:30px;
 display:flex;
 flex-direction: column;
 gap:20px;
 align-items:center;
  


 `
 export const Btn=styled.button`
 color:white;
 background-color:blueviolet;
 height:35px;
 width:150px;
 border:0;
 font-weight:600;
 position:relative;
 border-radius:15px;

 &:after{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background-color:white;
    opacity:0.2;
    left:0;
    top:0;
    transform-origin:bottom;
    transform:scaleY(0);
    transition:all 0.5s ease;
    border-radius:15px;


 }
 &:hover{
    &:after{
        
     transform:scaleY(1)
    }
 }
 `
 export const Inp= styled.input`
 height:25px;
 width:250px;
 padding:0 5px;
 
`
const Loading=styled.div`
 font-weight:500;
 font-size:19px;
 transition: all 0.5s ease ;
`

 
const Login=()=>{
   const navigate=useNavigate()

   const dispatch=useDispatch();
const errors=useSelector(selectError)
const isLoading=useSelector(selectIsLoading)
const IsVisible=useSelector(selectIsVisible)
const user=useSelector(selectUser)
const EyeIcon =IsVisible?FaRegEye:FaRegEyeSlash
useEffect(()=>{
      
   dispatch(clearErrors())
},[])

const loginUser=async(e,id,pass)=>{
   e.preventDefault()
   dispatch(clearErrors());
   dispatch(setIsLoading(true));

   fetch('http://localhost:5000/api/v1/user/login',{method:'post',
headers:{
"content-type":"application/json"   
},
body:JSON.stringify({name:id, email:id,password:pass}),

})
.then(res=>res.json())
.then(data=>{
   console.log(data)
if(!data.success){
   dispatch(setIsLoading(false));

 dispatch(addError(data.message))

}
else{
dispatch(setUser(data.message));
console.log(data.message)
navigate('/')

}
})
.catch(err=>{console.log(err)})
 
}
const emailRef=useRef(null)
    const passwordRef=useRef(null)
 

    return(
       
       
       <LoginContainer onSubmit={(e)=>{loginUser(e,emailRef.current.value,passwordRef.current.value)}}>
      <h1>Login</h1>

      <Inp ref={emailRef} required placeholder='input your username or email' />
    <PassWordWrapper>

    <Inp ref={passwordRef} required style={{border:'none',outline:"none  "}} type={IsVisible?'text':'password'} placeholder='input your password' />
    <EyeIcon onClick={()=>{dispatch(setIsVisible(!IsVisible))}}/>
        </PassWordWrapper>
{isLoading&&<Loading>Loading <span className="bouncing">...</span></Loading>}
<ErrorsCon>
{errors.map(err=>{
   return(
      <ErrorDetails>
         {err}
         </ErrorDetails>
         )
      })}
      </ErrorsCon>
      <Btn type="submit" >Login</Btn>
      
      </LoginContainer>    
   
   )

}
export default Login