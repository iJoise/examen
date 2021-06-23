import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reduser";


const reducers = combineReducers({
   counter: counterReducer,
});

export type RootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers);
