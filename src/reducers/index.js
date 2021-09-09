import { GameReducers } from "./gamesReducers";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
        game:GameReducers,
});
export default rootReducer;