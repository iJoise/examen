import {ACTIONS_TYPE, ActionType} from "./actions";


export type StateType = {
   maxValue: number
   startValue: number
   counter: number
   counterEditMode: boolean
   errorMaxValue: boolean
   errorStartValue: boolean
}

export const initialState: StateType = {
   maxValue: 5,
   startValue: 0,
   counter: 0,
   counterEditMode: false,
   errorMaxValue: false,
   errorStartValue: false
};

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
   switch (action.type) {
      case ACTIONS_TYPE.COUNTER_INC:
         return {
            ...state,
            counter: state.counter + 1
         }
      case ACTIONS_TYPE.RESET_COUNTER:
         return {
            ...state,
            counter: state.startValue
         }
      case ACTIONS_TYPE.CHANGE_MAX_VALUE:
      case ACTIONS_TYPE.CHANGE_START_VALUE:
      case ACTIONS_TYPE.SET_EDIT_MODE:
      case ACTIONS_TYPE.SET_ERROR_MAX_VALUE:
      case ACTIONS_TYPE.SET_ERROR_START_VALUE:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}

