import {ADD_GENRE, CHOSE_GENRES, GET_GENRES, GET_MOVIE_BY_GENRE, GET_MOVIES, SEARCH_MOVIES} from "./actionType";

const get_Movies = (payload) => {
    return {type: GET_MOVIES, payload}
}
const search_Movie = (payload) => {
    return {type: SEARCH_MOVIES, payload}
}
const search_MovieByGenre = (payload) => {
    return {type: GET_MOVIE_BY_GENRE, payload}
}
const get_Genres=(payload)=>{
    return {type:GET_GENRES,payload}
}
const chose_Genres=(payload)=>{
    return {type:CHOSE_GENRES,payload}
}
const add_Genres=(payload)=>{
    return {type:ADD_GENRE,payload}
}


export {get_Movies ,search_Movie,get_Genres,search_MovieByGenre,chose_Genres,add_Genres}