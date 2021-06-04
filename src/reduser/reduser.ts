type MaxValueType = { type: 'MAX-VALUE', value: number }
type StartValueType = { type: 'START-VALUE', value: number }
type CounterType = { type: 'COUNTER-INC' }
type CounterActivateEditModeType = { type: 'COUNTER-ACTIVATE-EDIT-MODE' }
type CounterDeactivateEditModeType = { type: 'COUNTER-DEACTIVATE-EDIT-MODE' }
type ResetCounterType = { type: 'RESET-INC' }
type AddErrorType = { type: 'ADD-ERROR' }
type DeleteErrorType = { type: 'DELETE-ERROR' }
type ChangeMaxValueType = {
   type: 'CHANGE-MAX-VALUE'
   value: number
}
type ChangeStartValueType = {
   type: 'CHANGE-START-VALUE'
   value: number
}
export type ActionType = MaxValueType
   | StartValueType
   | CounterType
   | CounterActivateEditModeType
   | AddErrorType
   | ResetCounterType
   | ChangeMaxValueType
   | ChangeStartValueType
   | CounterDeactivateEditModeType
   | DeleteErrorType

export type StateType = {
   maxValue: number
   startValue: number
   counter: number
   counterEditMode: boolean
   error: boolean
}

export const initialState: StateType = {
   maxValue: 5,
   startValue: 0,
   counter: 0,
   counterEditMode: false,
   error: false
};

export const reducer = (state: StateType, action: ActionType): StateType => {
   switch (action.type) {
      case 'COUNTER-INC':
         return {
            ...state,
            counter: state.counter + 1
         }
      case 'RESET-INC':
         return {
            ...state,
            counter: state.counter = state.startValue
         }
      case 'CHANGE-MAX-VALUE':
         return {
            ...state,
            maxValue: state.maxValue = action.value
         }
      case "CHANGE-START-VALUE":
         return {
            ...state,
            startValue: state.startValue = action.value
         }
      case "COUNTER-ACTIVATE-EDIT-MODE":
         return {
            ...state,
            counterEditMode: state.counterEditMode = true
         }
      case "COUNTER-DEACTIVATE-EDIT-MODE":
         return {
            ...state,
            counterEditMode: state.counterEditMode = false
         }
      case "ADD-ERROR":
         return {
            ...state,
            error: state.error = true
         }
      case "DELETE-ERROR":
         return {
            ...state,
            error: state.error = false
         }
      case "START-VALUE":
         return {
            ...state,
            startValue: state.startValue = action.value
         }
         case "MAX-VALUE":
         return {
            ...state,
            maxValue: state.maxValue = action.value
         }
      default:
         throw new Error('Bad action type');
   }
}



