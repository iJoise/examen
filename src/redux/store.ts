import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reduser";
import {saveState} from "../utils/localstorage";


const reducers = combineReducers({
   counter: counterReducer,
});

export type RootStateType = ReturnType<typeof reducers>


export const store = createStore(reducers);

store.subscribe(() => {
   saveState({
      maxValue: store.getState().counter.maxValue,
      startValue: store.getState().counter.startValue
   });
});
