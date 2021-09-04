import {GET_GENRES} from "../action/actionType";


export const filterReducer = (state = {genres: []}, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {...state,genres: [...action.payload]};
        default :
            return state;
    }
}