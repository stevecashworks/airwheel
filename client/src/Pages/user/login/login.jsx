import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { addError, clearErrors, selectError,selectIsLoading,setIsLoading } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,setUser } from '../../../redux/userSlice';
import { Navigate } from 'react-router-dom';
import './login.css'
import { ErrorsCon ,ErrorDetails} from '../register/register';
 export const  LoginContainer=styled.div`
 margin:100px auto;
 width:300px;
 min-height:400px;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; border-radius:30px;
 padding:30px;
 display:flex;
 flex-direction: column;
 gap:30px;
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

   const dispatch=useDispatch();
const errors=useSelector(selectError)
const isLoading=useSelector(selectIsLoading)
const user=useSelector(selectUser)


useEffect(()=>{
      
   dispatch(clearErrors())
},[])

const loginUser=async(id,pass)=>{
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

}
})
.catch(err=>{console.log(err)})
 
}
const emailRef=useRef(null)
    const passwordRef=useRef(null)
 if(!user){

    return(
       
       
       <LoginContainer>
      <h1>Login</h1>
      <Inp ref={emailRef} placeholder='input your username or email' />
    <Inp ref={passwordRef} type="password" placeholder='input your password' />
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
      <Btn onClick={()=>{loginUser(emailRef.current.value,passwordRef.current.value)}}>Login</Btn>
      
      </LoginContainer>    
   
   )
}else{
   return(
      <Navigate to='/'/>
   )
}
}
export default Login