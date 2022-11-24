import styled from 'styled-components'
import rate from './rate'
const Container=styled.div`
 height:120px;
 width: 340px;
 background-color:rgb(255,255,255,0.9);
 border-radius:30px;
 margin:10px auto;
 display:flex;
 gap:20px;
 @media(max-width:480px){
    width:100%;
    height:110px
 }
 
`
const ItemImage=styled.img`
height:90px;
width:90px;
border-radius:15px;
margin:auto 5px;

`
const RatingContainer= styled.div`
display:flex;

`
const OtherDetails= styled.div`
font-family: Monsterrat, sans-serif;
font-size:12px;
 `
 const Rating_And_Price_Container=styled.div`
 display:flex;
 font-size:12px;
 justify-content:space-between;
 flex-direction:row-reverse;
 align-items:center;
 `
const Card=({image, name,description,rating,price})=>{
    return(
        <Container>
            <ItemImage src={image}/>
            <OtherDetails>

            <p style={{fontWeight:"bold",textTransform:"capitalize"}}>{name}</p>
            <p style={{opacity:"0.8"}}>{description}</p>
            <Rating_And_Price_Container>

            <RatingContainer>
              {rate(rating).map(Star=>{return(
                  <Star style={{color:'goldenrod'}}/>
                  ) })}
            </RatingContainer>
            <p> Price($): {price}</p>

             </Rating_And_Price_Container>
                  </OtherDetails>
            
        </Container>
    )

}
export default Card