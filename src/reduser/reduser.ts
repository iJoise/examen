type MaxValueType = ReturnType<typeof MaxValueAC>
type StartValueType = ReturnType<typeof StartValueAC>
type CounterType = ReturnType<typeof CounterAC>
type CounterActivateEditModeType = ReturnType<typeof CounterActivateEditModeAC>
type CounterDeactivateEditModeType = ReturnType<typeof CounterDeactivateEditModeAC>
type ResetCounterType = ReturnType<typeof ResetCounterAC>
type AddErrorMaxValueType = ReturnType<typeof AddErrorMaxValueAC>
type DeleteErrorMaxValueType = ReturnType<typeof DeleteErrorMaxValueAC>
type AddErrorStartValueType = ReturnType<typeof AddErrorStartValueAC>
type DeleteErrorStartValueType = ReturnType<typeof DeleteErrorStartValueAC>
type ChangeMaxValueType = ReturnType<typeof ChangeMaxValueAC>
type ChangeStartValueType = ReturnType<typeof ChangeStartValueAC>


export type ActionType = MaxValueType
   | StartValueType
   | CounterType
   | CounterActivateEditModeType
   | AddErrorMaxValueType
   | ResetCounterType
   | ChangeMaxValueType
   | ChangeStartValueType
   | CounterDeactivateEditModeType
   | DeleteErrorMaxValueType
   | AddErrorStartValueType
   | DeleteErrorStartValueType

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
      case "ADD-ERROR-MAX-VALUE":
         return {
            ...state,
            errorMaxValue: state.errorMaxValue = true
         }
      case "DELETE-ERROR-MAX-VALUE":
         return {
            ...state,
            errorMaxValue: state.errorMaxValue = false
         }
      case "ADD-ERROR-START-VALUE":
         return {
            ...state,
            errorStartValue: state.errorStartValue = true
         }
      case "DELETE-ERROR-START-VALUE":
         return {
            ...state,
            errorStartValue: state.errorStartValue = false
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

export const MaxValueAC = (value: number) => {
   return { type: 'MAX-VALUE', value: value } as const
}
export const StartValueAC = (value: number) => {
   return { type: 'START-VALUE', value: value } as const
}
export const CounterAC = () => {
   return { type: 'COUNTER-INC' } as const
}
export const CounterActivateEditModeAC = () => {
   return { type: 'COUNTER-ACTIVATE-EDIT-MODE' } as const
}
export const CounterDeactivateEditModeAC = () => {
   return { type: 'COUNTER-DEACTIVATE-EDIT-MODE' } as const
}
export const ResetCounterAC = () => {
   return { type: 'RESET-INC' } as const
}
export const AddErrorMaxValueAC = () => {
   return { type: 'ADD-ERROR-MAX-VALUE' } as const
}
export const DeleteErrorMaxValueAC = () => {
   return { type: 'DELETE-ERROR-MAX-VALUE' } as const
}
export const AddErrorStartValueAC = () => {
   return { type: 'ADD-ERROR-START-VALUE' } as const
}
export const DeleteErrorStartValueAC = () => {
   return { type: 'DELETE-ERROR-START-VALUE' } as const
}
export const ChangeMaxValueAC = (value: number) => {
   return {type: 'CHANGE-MAX-VALUE', value: value} as const
}
export const ChangeStartValueAC = (value: number) => {
   return {type: 'CHANGE-START-VALUE', value: value} as const
}

