export enum ACTIONS_TYPE {
   COUNTER_INC = 'Counter/COUNTER_INC',
   RESET_INC = 'Counter/RESET-INC',
   CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_VALUE',
   CHANGE_START_VALUE = 'Counter/CHANGE_START_VALUE',
   COUNTER_ACTIVATE_EDIT_MODE = 'Counter/COUNTER_ACTIVATE_EDIT_MODE',
   COUNTER_DEACTIVATE_EDIT_MODE = 'Counter/COUNTER_DEACTIVATE_EDIT_MODE',
   ADD_ERROR_MAX_VALUE = 'Counter/ADD_ERROR_MAX_VALUE',
   DELETE_ERROR_MAX_VALUE = 'Counter/DELETE_ERROR_MAX_VALUE',
   ADD_ERROR_START_VALUE = 'Counter/ADD_ERROR_START_VALUE',
   DELETE_ERROR_START_VALUE = 'Counter/DELETE_ERROR_START_VALUE',
}

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


export type ActionType = CounterType
   | CounterActivateEditModeType
   | AddErrorMaxValueType
   | ResetCounterType
   | ChangeMaxValueType
   | ChangeStartValueType
   | CounterDeactivateEditModeType
   | DeleteErrorMaxValueType
   | AddErrorStartValueType
   | DeleteErrorStartValueType


export const CounterAC = () => {
   return {type: ACTIONS_TYPE.COUNTER_INC} as const
}
export const CounterActivateEditModeAC = () => {
   return {type: ACTIONS_TYPE.COUNTER_ACTIVATE_EDIT_MODE} as const
}
export const CounterDeactivateEditModeAC = () => {
   return {type: ACTIONS_TYPE.COUNTER_DEACTIVATE_EDIT_MODE} as const
}
export const ResetCounterAC = () => {
   return {type: ACTIONS_TYPE.RESET_INC} as const
}
export const AddErrorMaxValueAC = () => {
   return {type: ACTIONS_TYPE.ADD_ERROR_MAX_VALUE} as const
}
export const DeleteErrorMaxValueAC = () => {
   return {type: ACTIONS_TYPE.DELETE_ERROR_MAX_VALUE} as const
}
export const AddErrorStartValueAC = () => {
   return {type: ACTIONS_TYPE.ADD_ERROR_START_VALUE} as const
}
export const DeleteErrorStartValueAC = () => {
   return {type: ACTIONS_TYPE.DELETE_ERROR_START_VALUE} as const
}
export const ChangeMaxValueAC = (value: number) => {
   return {type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value} as const
}
export const ChangeStartValueAC = (value: number) => {
   return {type: ACTIONS_TYPE.CHANGE_START_VALUE, value} as const
}