export enum ACTIONS_TYPE {
   COUNTER_INC = 'Counter/COUNTER_INC',
   RESET_COUNTER = 'Counter/RESET-COUNTER',
   CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_VALUE',
   CHANGE_START_VALUE = 'Counter/CHANGE_START_VALUE',
   SET_EDIT_MODE = 'Counter/SET_EDIT_MODE',
   SET_ERROR_MAX_VALUE = 'Counter/SET_ERROR_MAX_VALUE',
   SET_ERROR_START_VALUE = 'Counter/SET_ERROR_START_VALUE',
}

type CounterType = ReturnType<typeof CounterAC>
type SetEditModeType = ReturnType<typeof SetEditModeAC>
type ResetCounterType = ReturnType<typeof ResetCounterAC>
type SetErrorMaxValueType = ReturnType<typeof SetErrorMaxValueAC>
type AddErrorStartValueType = ReturnType<typeof SetErrorStartValueAC>
type ChangeMaxValueType = ReturnType<typeof ChangeMaxValueAC>
type ChangeStartValueType = ReturnType<typeof ChangeStartValueAC>


export type ActionType = CounterType
   | SetEditModeType
   | SetErrorMaxValueType
   | ResetCounterType
   | ChangeMaxValueType
   | ChangeStartValueType
   | AddErrorStartValueType


export const CounterAC = () => {
   return {type: ACTIONS_TYPE.COUNTER_INC} as const
}
export const SetEditModeAC = (counterEditMode: boolean) => {
   return {type: ACTIONS_TYPE.SET_EDIT_MODE, payload: {counterEditMode}} as const
}

export const ResetCounterAC = () => {
   return {type: ACTIONS_TYPE.RESET_COUNTER} as const
}
export const SetErrorMaxValueAC = (errorMaxValue: boolean) => {
   return {type: ACTIONS_TYPE.SET_ERROR_MAX_VALUE, payload: {errorMaxValue}} as const
}
export const SetErrorStartValueAC = (errorStartValue: boolean) => {
   return {type: ACTIONS_TYPE.SET_ERROR_START_VALUE, payload: {errorStartValue}} as const
}
export const ChangeMaxValueAC = (maxValue: number) => {
   return {type: ACTIONS_TYPE.CHANGE_MAX_VALUE, payload: {maxValue}} as const
}
export const ChangeStartValueAC = (startValue: number) => {
   return {type: ACTIONS_TYPE.CHANGE_START_VALUE, payload: {startValue}} as const
}