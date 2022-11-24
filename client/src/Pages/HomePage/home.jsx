import styled from 'styled-components'
import back1 from './backgroundVids/back2.mp4'
import Nav from './components/Nav'
import { MdOutlineSearch } from 'react-icons/md'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsCalendarDate} from 'react-icons/bs'
import { GiBabyfootPlayers } from 'react-icons/gi'
import { FaChevronDown,FaChevronRight } from 'react-icons/fa';
import {useEffect,useRef, useState} from 'react';
import offlineData from '../../assets/assetData'
import steveAvatar from './steve.jpg';
// import {mobile} from '../../responsive';

import './home.css';
import Card from './components/card'
// import pair from '../../pair'
const AppCon=styled.div`
width:100%;
height:100vh;
position:relative;
display:flex;
align-items:center;
justify-content:center;
` 
const  CenterCon=styled.div`
width:85%;
height:85%;
border:3px solid   rgb(189, 250, 250);
border-radius:30px;
display:flex;
z-index:1;
border-collapse:collapse;
`
const CenterConLeft=styled.div`
height:100%;
border-radius:30px 0 0 30px; 
background-color:rgb(88, 255, 255,.9);
flex:1;
display:flex;
max-width:100%
  


`
const Avatar=styled.img`
width:30px;
height:30px;
border-radius:50%;

`
const CenterLeftOthers=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const InpDiv=styled.div`
width:300px;
display:flex;
align-items:center;
margin:30px 35px;
gap:15px;
border-bottom:0.5px solid blueviolet;
`
const CenterConRight=styled.div`
flex:1;
border-radius:40px;
background-color:rgb(0,0,0,0.1);
color:white;
height:100%;
border-radius:-45px;
border-collapse:collapse;
display:flex;
flex-direction:column;
`
 

const Details=styled.div`
background-color:white;
width:300px;
height:200px;
border-radius:23px;
display:flex;
margin:0 auto;
`
const SearchBtn=styled.div`
flex:1;
height:100%;
background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:25px;
justify-self:flex-end;
opacity:0.8;

`
const UserBtn=styled.p`
background-color: rgb(189, 250, 250,0.7);
height:40px;
display:flex;
justify-content:center;
width:150px;
align-items:center;
color:rgb(255,255,255);
font-weight:300;
border-radius:13px;
align-self:flex-end;
margin-right:15px;
justify-content:space-around;

`  
const DetailsContent=styled.div`
flex:4;
height:100%;
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
`
const DetailItem=styled.div`
 display: flex;
 align-items:center;
 width:100%;
 justify-content:space-around;
  font-size:14px;
  color:rgb(0,0,0,0.3);
  cursor:pointer;
  border-bottom: 0.5px solid rgb(0,0,0,0.1); 
`
const Detaili=styled.div`
height:40px;
width:40px;
border-radius:7px;
background-color: rgb(230, 230, 230,0.6);
display:flex;
align-items:center;
justify-content:center;
`
const TrendingVisits=styled.div`
margin-left:-200px;
margin-top:15px;

`
const BigHead=styled.p`
font-size:20px;
`

const SmallHead=styled.p`
font-weight:light;
opacity:0.7;
font-size:12px;
`
const CenterConRightMid=styled.div`
 justify-self:center;
 margin:40px 60px;
 display:flex;
 flex-direction:column;
 gap:20px;
 font-family:"Nunito", sans-serif;
 `
const Intro= styled.p`
font-weight:400;
font-size:25px;
color:white;
margin:0;
`
const PlanBtn = styled.div`
color:white;
width:140px;
border:1px solid white;
display:flex;
align-items:center;
justify-content:space-around;
font-size:16px;
font-weight:600;
height:40px;
border-radius:15px;
position:relative;
margin-top:20px;



&:before{
    content:"";
    width:100%;
    height:100%;
    position:absolute;
    border-radius:15px;
    background-color:blueviolet;
    opacity:70%;
    z-index:-1;
    transform:scaleX(0);
transition: transform 0.5s ease;
transform-origin: left;


    
}
&:hover{
    &:before{
        transform:scaleX(1)
    }
}
`
const KeyWord=styled.p`
font-weight:900;
font-size:50px;
color:white;
margin: 0;

    

`

const Home=()=>{
    const  [fetched_data,setFetchedData]=useState([]);
    const  inp1=useRef(null)
    const  inp2=useRef(null)
    const  inp3=useRef(null)
const detailData=[{icon:MdOutlineLocationOn, text:"Places" ,id:"option01",inp:inp1},{icon:BsCalendarDate,text:null,id:"option02",inp:inp2},{icon:GiBabyfootPlayers,text:"Participants", id:"option03",inp:inp3}]

    console.log(fetched_data)

    const fetchData=async()=>{
         await fetch("http://localhost:5000/api/v1/places").then(response=>response.json()).then(data=>setFetchedData(data[0].Hotels)).catch((err)=>{
            console.log(err);
            setFetchedData(offlineData)
         })
    }
    const inputRef=useRef(null);
    
   useEffect(()=>{
    fetchData()
   },[])
 return(
    
    <AppCon>
        <video style={{position:"fixed",minWidth:'100%',minHeight:'100%',zIndex:'0',opacity:'0.8'}} autoPlay loop  muted>
            <source src={back1} type= 'video/mp4'></source>
        </video>
        <CenterCon id="center-con">
                <CenterConLeft id= "center-left"className="center-left">

            <Nav />
            <CenterLeftOthers id='left-others'>
                
                    <InpDiv id='inp-div'>
                        <input ref={inputRef} placeholder='Search places, reservations and treats' id='inp' style={{border:"0",outline:"0",flex:"8",height:"35px",backgroundColor:'transparent'}}/>
                        <MdOutlineSearch style={{flex:'2',fontSize:"18px",fontWeight:"lighter",opacity:"0.8"}}/>
                    
                    </InpDiv>
                    <Details id='detailsCon'>
                    
                        <DetailsContent>
                            {
                                detailData.map(data=>{
                                   const Icon=data.icon;
                                    return(

                                        <DetailItem onClick={()=>{const element=data.inp.current; const is_Focused=(document.activeElement===element);  if(is_Focused){element.blur()} else{element.focus()};console.log(is_Focused);}} key={data.id}>
                                            <Detaili>
                                             <Icon style={{color:"blueviolet",fontSize:"20px"}}/>   
                                            </Detaili>
                                            <input ref={data.inp} type={(data.id==="option02")?'date':"text"}  style={{border:'0', outline:'0', height:"90%"}} placeholder={data.text}></input>

                                        </DetailItem>
        
                                        
                                    )
                                })
                            }

                        </DetailsContent>
                    <SearchBtn onClick={()=>{inputRef.current.focus()}}>
                        <MdOutlineSearch style={{fontWeight:"900",fontSize:"24px"}}/>
                    </SearchBtn>

                    </Details>
                            <TrendingVisits>
                                <BigHead>Popular Places </BigHead>
                                <SmallHead>in Nairobi Kenya</SmallHead>
                            </TrendingVisits>

{fetched_data.map(item=>{
    return(<Card name={item.name}description={item.description} image={item.image} price={item.price} rating={item.rating}/>)    })}
            </CenterLeftOthers>
                </CenterConLeft>
                <CenterConRight>
                    <UserBtn id='user-btn'>
                        <div style={{display:"flex",gap:'2px',alignItems:"center"}}>

                        <Avatar src={steveAvatar} />

                        Hello Steve
                        </div>
                        <FaChevronDown/>
                    </UserBtn>
                    <CenterConRightMid>
                        <Intro>
                            Live as if
                        </Intro>
                        <KeyWord>The <span  className="bouncing-con">
                             <span className="bounce"style={{"--sn":"0"}}>P</span>
                             <span className="bounce"style={{"--sn":"0.5"}}>a</span>
                             <span className="bounce"style={{"--sn":"1"}}>r</span>
                             <span className="bounce"style={{"--sn":"1.5"}}>a</span>
                             <span className="bounce"style={{"--sn":"2"}}>d</span>
                             <span className="bounce"style={{"--sn":"2.5"}}>i</span>
                             <span className="bounce"style={{"--sn":"3"}}>s</span>
                             <span className="bounce"style={{"--sn":"3.5"}}>e</span>
                             
                             </span></KeyWord>
                        <Intro>Is on earth</Intro>
                      <PlanBtn>Plan a trip <FaChevronRight/></PlanBtn>
                        </CenterConRightMid>

                </CenterConRight>
        </CenterCon>
        </AppCon>
 )   
}
export default Home