import React, {useState} from "react";
import styled from "styled-components";
import dataFoods from '../dataBase/FoodLists.json';
import Redheart from '../assets/Redheart.png'
import Blackheart from '../assets/blackHeart.png'

const PopBox = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0,0,0,0.548);
`;

const Container= styled.div`
    position: relative;
    width: 25rem;
    height: 40rem;
   
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto;
    margin-top: 3rem;
    border-radius: 20%;
    
`;
const PopTitile = styled.div`
    width: 20rem;
    height: 3rem;
    -webkit-text-stroke: 0.0625rem #000;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 2rem;
    margin: auto;
    margin-top:2rem;
    color: #8ca8f0;
    border-bottom: 0.1rem solid #aebde2;
`;

const Popimg = styled.img`
    display: block;
    width: 24rem;
    height: 12rem;
    margin: auto;
    margin-top: 2rem;
    
    border-radius: 5%;
    

`;



const Close= styled.button`

    width: 15rem;
    height: 2rem;
    margin-left: 5rem;
    margin-top:  0.3rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;
    font-family: 'Dalseo';
    font-size: 1rem;
    background-color: #B2C8DF;
    border: 0;
    border-radius: 20%;
    cursor: pointer;

`
;

const AddWishbox =styled.div`
    position: absolute;
    width: 10rem;
    height:2rem;
    font-size: 0.5rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    cursor: pointer;
    text-align:center;
    bottom: 2rem;
    left: 15rem;
    
    
`

const RedHeart = styled.img`
    width:1rem;
    height:1rem;
`;

const List = styled.li`
    list-style: none;
`;

const Text = styled.p`
    font-family: 'Dalseo';
    margin-left: 0.5rem;
`;



function PopImfo({setPopshow, sendId, setWishid}) {

    const [foodsLists, setFoodLists] = useState(dataFoods);
    const checkId = sendId;

    const food = foodsLists.filter(
        (foodlist) => (foodlist.?????????ID == checkId)
        )
        const foodFullList = food.map(
            (foodlist)  =>(  
          <List> 
                <Popimg  src={foodlist.?????????URL} />
                <Text>?????? : {foodlist.????????????} </Text> 
                <Text>???????????? : {foodlist.????????????}</Text> 
                <Text>?????? : {foodlist.??????}</Text> 
                <Text>?????? ??? ?????? :{foodlist['?????? ??? ??????']}</Text> 
                <Text>????????? : {foodlist.?????????} </Text>
          </List>)
          )
                
               
            
        const [heartChange, setHeartChange]=useState(true);

        
        

    return(
        <PopBox>
        
            <Container>
                <PopTitile>Busan Tasty Road</PopTitile>
                {foodFullList}
                
                <Close onClick={()=>{setPopshow(false)}}>Back</Close>
                <AddWishbox><RedHeart src={heartChange?Blackheart:Redheart} onClick={() => {setHeartChange(!heartChange) ; setWishid(checkId)} }/> Add Wish</AddWishbox>
                

            </Container>
      
      
        </PopBox>
    )
    




};



export default PopImfo;