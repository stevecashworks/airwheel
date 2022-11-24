import { useRef } from 'react'
import styled from 'styled-components'
import './login.css'
 export const  LoginContainer=styled.div`
 margin:100px auto;
 width:300px;
 min-height:400px;
 border:1px solid gray;
 border-radius:30px;
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
    background-color:blue;
    opacity:0.1;
    left:0;
    top:0;
    transform-origin:center;
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
 text-transform:capitalize;
 `
 const loginUser=(id,pass)=>{
    console.log(`id: ${id}  password:${pass}`)
 }
const Login=()=>{
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
 return(
 <LoginContainer>
    <h1>Login</h1>
    <Inp ref={emailRef} placeholder='input your username or email' />
    <Inp ref={passwordRef} type="password" placeholder='input your password' />
    <Btn onClick={()=>{loginUser(emailRef.current.value,passwordRef.current.value)}}>Login</Btn>

 </LoginContainer>    
 )
}
export default Login