import React from "react";
import styled from "styled-components";


const Game=({name,image,release})=>{
    return(
        <GameDiv>
            <div>
            <h2>{name}</h2>
            <h2>{release}</h2>
            <img src={image} alt="photu" />
            </div>
        </GameDiv>
    );
}

const GameDiv=styled.div`
    box-sizing: border-box;
    margin: 2rem;
    box-shadow: 2px 2px 10px gray;
    width:20rem;
    max-width:20rem;
    padding: 0.4rem 0rem 0rem 0rem;
    img{
        max-width: 20rem;
        width:20rem;
    }
    
`

export default Game;
