import React, {useEffect, useReducer} from 'react';
import s from "./App.module.scss";
import {Counter} from "./component/Counter/Counter";
import {Settings} from "./component/Settings/Settings";
import {reducer, StateType} from "./reduser/reduser";

type AppPropsType = {
   initialState: StateType
}

const App: React.FC<AppPropsType> = ({initialState}) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      const startValue = localStorage.getItem('startValue')
      const maxValue = localStorage.getItem('maxValue')
      if (startValue && maxValue) {
         const newStartValue = JSON.parse(startValue)
         const newMaxValue = JSON.parse(maxValue)
         dispatch({type: 'START-VALUE', value: newStartValue})
         dispatch({type: 'MAX-VALUE', value: newMaxValue})
         dispatch({type: 'RESET-INC'})
         if (newStartValue < 0) {
            dispatch({type: 'COUNTER-ACTIVATE-EDIT-MODE'})
            dispatch({type: 'ADD-ERROR-START-VALUE'})
         }
         if (newMaxValue <= newStartValue) {
            dispatch({type: 'COUNTER-ACTIVATE-EDIT-MODE'})
            dispatch({type: 'ADD-ERROR-MAX-VALUE'})
            dispatch({type: 'ADD-ERROR-START-VALUE'})
         }
      }
   }, []);


   useEffect(() => {
      localStorage.setItem('startValue', JSON.stringify(state.startValue))
      localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
   }, [state.startValue, state.maxValue]);


   const addIncrement = () => {
      dispatch({type: "COUNTER-INC"})
   }
   const resetIncrement = () => {
      dispatch({type: 'RESET-INC'})
   }
   const onChangeMaxValue = (value: number) => {
      dispatch({type: 'CHANGE-MAX-VALUE', value: value})
      dispatch({type: 'DELETE-ERROR-MAX-VALUE'})
      dispatch({type: 'DELETE-ERROR-START-VALUE'})
      if (value <= state.startValue) {
         dispatch({type: 'ADD-ERROR-MAX-VALUE'})
         dispatch({type: 'ADD-ERROR-START-VALUE'})
      }
   }
   const onChangeStartValue = (value: number) => {
      dispatch({type: 'CHANGE-START-VALUE', value: value})
      dispatch({type: 'DELETE-ERROR-START-VALUE'})
      if (value < 0 || state.maxValue < state.startValue) {
         dispatch({type: 'ADD-ERROR-START-VALUE'})
      }
   }
   const onActiveEditMode = () => {
      dispatch({type: 'COUNTER-ACTIVATE-EDIT-MODE'})
   }
   const onDeactivateEditMode = () => {
      dispatch({type: 'RESET-INC'})
      dispatch({type: 'COUNTER-DEACTIVATE-EDIT-MODE'})
   }


   return (
      <div className={s.app}>
         <Settings
            errorStartValue={state.errorStartValue}
            errorMaxValue={state.errorMaxValue}
            onDeactivateEditMode={onDeactivateEditMode}
            onActiveEditMode={onActiveEditMode}
            onChangeStartValue={onChangeStartValue}
            onChangeMaxValue={onChangeMaxValue}
            maxValue={state.maxValue}
            startValue={state.startValue}
            counterEditMode={state.counterEditMode}
         />
         <Counter
            errorStartValue={state.errorStartValue}
            errorMaxValue={state.errorMaxValue}
            counterEditMode={state.counterEditMode}
            maxValue={state.maxValue}
            minValue={state.startValue}
            counter={state.counter}
            addIncrement={addIncrement}
            resetIncrement={resetIncrement}
         />

      </div>
   );
}

export default App;
