import {GET_MOVIES, SEARCH_MOVIES} from "./actionType";

const get_Movies = (payload) => {
    return {type: GET_MOVIES, payload}
}
const search_Movie = (payload) => {
    return {type: SEARCH_MOVIES, payload}
}


export {get_Movies ,search_Movie}