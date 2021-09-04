import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {filterReducer} from "./filterReducer";


export const reducer=combineReducers({movieReducer,filterReducer})