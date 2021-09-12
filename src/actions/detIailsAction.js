import { game_details,screenshots } from "../api";
import axios from "axios";

export const DetailsAction=(id)=>async (dispatch)=>{

    dispatch({type:"IS_LOADING"})

    const obj= await axios.get(game_details(id))
    const screenShots=await axios.get(screenshots(id))
    dispatch({
        type:"GET_DETAILS",
        payload:{
            detail:obj.data,
            screens:screenShots.data.results
        }
    })
}
