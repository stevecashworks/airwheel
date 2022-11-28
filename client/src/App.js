import styled from "styled-components"
import {useDispatch,useSelector} from 'react-redux'
import {selectPositon,selectPreviousPosition} from './redux/scrollSlice'
const AppCon= styled.div`
 width:80%;
margin: 0 auto;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 height:100vh;
 overflow-x:hidden;
 scroll:none;
`
const App=()=>{
  
  
    return(
        <AppCon/>
    )
} 
export default App 
  