import {GET_MOVIES} from "../action/actionType";


export const movieReducer=(state={movies:[]},action)=>{
    switch (action.type){
        case GET_MOVIES:
            return{...state,movies: [...action.payload]}
        default:
            return state;
    }


}



