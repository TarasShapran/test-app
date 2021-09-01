import {createStore , applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {reducer} from "../reducers";


export let store = createStore( reducer,applyMiddleware(ReduxThunk));