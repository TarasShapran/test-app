import {GET_MOVIES} from "./actionType";

const get_Movies = (payload) => {
    return {type: GET_MOVIES,payload}
}


export {get_Movies}