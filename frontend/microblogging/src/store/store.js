import { authReducer } from "./auth/Reducer";
import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { chirpReducer } from "./Chirp/Reducer";

//const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
//const { default: thunk } = require("redux-thunk");

const rootReducers = combineReducers({

    auth:authReducer,
    chirp:chirpReducer,

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));