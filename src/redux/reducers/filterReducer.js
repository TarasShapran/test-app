import {ADD_GENRE, CHOSE_GENRES, GET_GENRES} from "../action/actionType";


export const filterReducer = (state = {genres: []}, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {...state, genres: [...action.payload]};
        case CHOSE_GENRES:
            return {...state, genres: [...state.genres.filter(value => value.id !== action.payload.id)]}
        case ADD_GENRE:
            return {...state, genres: [...state.genres, action.payload]}
        default :
            return state;
    }
}