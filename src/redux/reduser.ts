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
      case ACTIONS_TYPE.RESET_INC:
         return {
            ...state,
            counter: state.counter = state.startValue
         }
      case ACTIONS_TYPE.CHANGE_MAX_VALUE:
         return {
            ...state,
            maxValue: state.maxValue = action.value
         }
      case ACTIONS_TYPE.CHANGE_START_VALUE:
         return {
            ...state,
            startValue: state.startValue = action.value
         }
      case ACTIONS_TYPE.COUNTER_ACTIVATE_EDIT_MODE:
         return {
            ...state,
            counterEditMode: state.counterEditMode = true
         }
      case ACTIONS_TYPE.COUNTER_DEACTIVATE_EDIT_MODE:
         return {
            ...state,
            counterEditMode: state.counterEditMode = false
         }
      case ACTIONS_TYPE.ADD_ERROR_MAX_VALUE:
         return {
            ...state,
            errorMaxValue: state.errorMaxValue = true
         }
      case ACTIONS_TYPE.DELETE_ERROR_MAX_VALUE:
         return {
            ...state,
            errorMaxValue: state.errorMaxValue = false
         }
      case ACTIONS_TYPE.ADD_ERROR_START_VALUE:
         return {
            ...state,
            errorStartValue: state.errorStartValue = true
         }
      case ACTIONS_TYPE.DELETE_ERROR_START_VALUE:
         return {
            ...state,
            errorStartValue: state.errorStartValue = false
         }
      case ACTIONS_TYPE.START_VALUE:
         return {
            ...state,
            startValue: state.startValue = action.value
         }
      case ACTIONS_TYPE.MAX_VALUE:
         return {
            ...state,
            maxValue: state.maxValue = action.value
         }
      default:
         return state;
   }
}

