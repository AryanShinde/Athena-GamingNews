import { GameReducers } from "./gamesReducers";
import { DetailReducer } from "./detailReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
        game:GameReducers,
        detail:DetailReducer,
});
export default rootReducer;