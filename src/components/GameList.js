import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import styled from "styled-components";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { gamesAction } from "../actions/gamesAction";
import Details from "./details";
import { useLocation } from "react-router";

const GameList=()=>{
    const location=useLocation();
    const pathId=location.pathname.split("/")[2];


    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(gamesAction());
    },[dispatch])
    const upcoming= useSelector(store=>store.game.upcomingGames)
    const popular=useSelector(store=>store.game.popularGames);
    const newGame=useSelector(store=>store.game.newGames);
    const searchGame=useSelector(store=>store.game.searchedGames);
    console.log(searchGame);

    if(upcoming.length!=0){
    return(
        <Main>
            {( searchGame.length && <>
        <h1 style={{textAlign:"center"}}>Searched Games</h1>
         <Gamelist >
             {searchGame.map((game)=>{
                 return <Game name={game.name} id={game.id} release={game.released} image={game.background_image} key={game.id}/>
             })}
         </Gamelist>
         </>)}
            

        <h1 style={{textAlign:"center"}}>Upcoming Games</h1>
        <Gamelist >
            {pathId && <Details/>}
            {upcoming.map((game)=>{
                return <Game name={game.name} release={game.released} image={game.background_image} id={game.id} key={game.id}/>
            })}
        </Gamelist>

         <h1 style={{textAlign:"center"}}>Popular Games</h1>
         <Gamelist >
             {popular.map((game)=>{
                 return <Game name={game.name} id={game.id} release={game.released} image={game.background_image} key={game.id}/>
             })}
         </Gamelist>

          <h1 style={{textAlign:"center"}}>New Games</h1>
          <Gamelist >
              {newGame.map((game)=>{
                  return <Game name={game.name} id={game.id} release={game.released} image={game.background_image} key={game.id}/>
              })}
          </Gamelist>
          </Main>
    );
    }
    else{
        return(
            <>
            <h1 style={{textAlign:"center"}}>Loading...</h1>
            </>
        )
    }
}
const Gamelist=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
`
const Main=styled.div`
h1{
    font-family: 'Abril Fatface', cursive;
}
`

export default GameList;