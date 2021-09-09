const initialState={
    popularGames:[],
    newGames:[],
    upcomingGames:[],
    searchedGames:[]
}

export const GameReducers=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,popularGames:action.payload.popular,
                upcomingGames:action.payload.upcoming,
                newGames:action.payload.newgames,
            };
        default:
            return {...state};
    }
}