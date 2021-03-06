import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { DetailsAction } from "../actions/detIailsAction";
import { Link } from "react-router-dom";

const Game=({name,image,release,id})=>{
    const dispatch=useDispatch();


    const detailHandler=()=>{
        dispatch(DetailsAction(id));
    }
    return(
        <Link to={`/game/${id}`}>
        <GameDiv onClick={detailHandler}>
            <h3>{name}</h3>
            <Released>{release}</Released>
            <img src={image} alt="photu" />
        </GameDiv>
        </Link>
    );
}

const GameDiv=styled.div`
    cursor:pointer;
    border-radius:0.4rem;
    box-sizing: border-box;
    margin: 2rem;
    box-shadow: 0px 0px 12px #8881d1;
    width:20rem;
    max-width:20rem;
    padding: 0.4rem 0rem 0rem 0rem;
    height: 20rem;
    max-height: 20rem;
    overflow: hidden;
    background-color: white;
    color: #2a2a2a;

    h3{
        text-align: center;
        font-size: 20px;

    }
    img{
        max-width: 20rem;
        width:20rem;
        object-fit: cover;
        max-height: 20rem;
        height: 20rem;
    }
    
`
const Released=styled.div`
text-align: center;
padding-bottom: 1rem;
`

export default Game;
