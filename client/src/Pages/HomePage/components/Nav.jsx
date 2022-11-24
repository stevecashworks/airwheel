import styled from 'styled-components';
import {RiHotelFill} from 'react-icons/ri';
import {RiFlightTakeoffLine} from 'react-icons/ri'
import {WiTrain} from 'react-icons/wi'
import { MdOutlineLocalTaxi} from 'react-icons/md'
import {GiSailboat} from 'react-icons/gi';
 import './nav.css'
 import {selectCurrentPosition, selectPreviousPosition, setPosition} from '../../../redux/scrollSlice';
 import {useEffect} from  'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectField, setField } from '../../../redux/navSlice';
 const iconsData=[{id:1,icon:RiHotelFill},{id:2,icon:RiFlightTakeoffLine},{id:3,icon:WiTrain},{id:4,icon:MdOutlineLocalTaxi},{id:5,icon:GiSailboat}]
 const LogoCon=styled.div`
   height:100px;
   width:40px;
   color:white;
 font-size:24px;
 text-align:center;

 `
 
 const Air=styled.p`
 font-weight:bold;
 font-size:18px;
 margin:0 auto;
 font-family: 'Nunito', sans-serif;
 
 `
 const Wheel=styled.p`
 font-weight:light;
 color:rgb(255,255,255,0.9);
 font-size:18px;
 margin:0 auto;
 
 `

 const NavCon=styled.div`
 height:100%;
 background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
 display:flex;
 flex-direction:column;
 width:70px;
 border-radius:30px 0 0 30px;
 align-items:center;
 justify-content:space-around;`
 


const Nav=()=>{
   
    const field=useSelector(selectField)
    const position=useSelector(selectCurrentPosition)
    const formerPosition=useSelector(selectPreviousPosition)
    const dispatch=useDispatch();
    const scrollWentDown=(position>formerPosition)
    const transformType=scrollWentDown?'0px':'80px';
    const scrollEvent=()=>{
        
        dispatch(setPosition({current:window.scrollY,previous:position}))
       }
    const changeField=(id)=>{
        dispatch(setField(id))
    }
    useEffect(()=>{
       window.addEventListener("scroll", scrollEvent)
    
    return ()=>{
        // 
        window.removeEventListener("scroll", scrollEvent)
    }
 
    })
    

    return(
        <NavCon id="nav-con" style={{"--transform":transformType}}>
            <LogoCon id="LogoCon">
                <Air >
                    Air
                </Air>
                <Wheel>
                    Wheel
                </Wheel>
            </LogoCon>
            {iconsData.map(data=>{
                const {id}=data
                const Icon=data.icon;

                return(<Icon onClick={()=>changeField(id)} className='nav-icon' style={{opacity:field===id?"1":"0.6"}}/>)
            })}
         
        </NavCon>
    )
}
export default Nav