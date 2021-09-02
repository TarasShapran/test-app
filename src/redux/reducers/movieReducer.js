import {GET_MOVIE_BY_ID, GET_MOVIES, SEARCH_MOVIES} from "../action/actionType";


export const movieReducer=(state={movies:[]},action)=>{
    switch (action.type){
        case GET_MOVIES:
            return{...state,movies: [...action.payload]}
        case GET_MOVIE_BY_ID:
            return {...state,movies: [...action.payload]}
            case SEARCH_MOVIES:
            return {...state,movies: [...action.payload]}
        default:
            return state;
    }


}



