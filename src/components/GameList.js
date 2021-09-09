import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import styled from "styled-components";


const GameList=()=>{

    const upcoming= useSelector(store=>store.game.upcomingGames)
    return(
        <>
        <h2>Upcoming Game</h2>
        <Gamelist>
            {upcoming.map((game)=>{
                return <Game name={game.name} release={game.released} image={game.background_image} key={game.id}/>
            })}
        </Gamelist>
        </>
    );
}
const Gamelist=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
`

export default GameList;