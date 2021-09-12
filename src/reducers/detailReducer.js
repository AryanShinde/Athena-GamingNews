const initialState={
    details:{temp:{}},
    screen:{temp:{}},
    isloading:true
}


export const DetailReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DETAILS":
            return {...state,details:action.payload.detail,screen:action.payload.screens,isloading:false};
        case "IS_LOADING":
            return {...state,isloading:true}
        default:
            return {...state};
    }
}