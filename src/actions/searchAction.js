import { search_games } from "../api";
import axios from "axios";


export const SearchAction=(name)=> async (dispatch)=>{
    const data=await axios.get(search_games(name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
            search: data.data.results,
        }
    })

}