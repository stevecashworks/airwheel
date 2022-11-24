import {RiStarHalfFill,RiStarFill} from 'react-icons/ri'

const rate=(n)=>{
    const stars=[]
 const whole_Number=Math.floor(n);
 const difference= n-whole_Number;
 for(let i=0;i<whole_Number;i++){
     stars.push(RiStarFill);

 }
 if(difference!==0){
    stars.push(RiStarHalfFill)
 }
  return(stars)
 }
 export default rate