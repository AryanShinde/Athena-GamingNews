import axios from "axios";
import { popular_games,upcoming_games,new_games } from "../api";

export const gamesAction=()=> async (dispatch)=>{
    const popular=await axios.get(popular_games);
    const upcomingdata=await axios.get(upcoming_games);
    const newgamesdata=await axios.get(new_games);
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popular.data.results,
            upcoming:upcomingdata.data.results,
            newgames:newgamesdata.data.results

        }
    })
}