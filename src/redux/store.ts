import {combineReducers, createStore} from "redux";
import {counterReducer, initialState} from "./reduser";
import {loadState, saveState} from "../utils/localstorage";


const reducers = combineReducers({
   counter: counterReducer,
});

export type RootStateType = ReturnType<typeof reducers>


export const store = createStore(reducers, {
   counter: {
      ...initialState,
      maxValue: loadState()?.maxValue ?? initialState.maxValue,
      startValue: loadState()?.startValue ? loadState()?.startValue : initialState.startValue,
   }
});

store.subscribe(() => {
   saveState({
      maxValue: store.getState().counter.maxValue,
      startValue: store.getState().counter.startValue
   });
});
