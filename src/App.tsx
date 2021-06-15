import React, {useEffect, useReducer} from 'react';
import s from "./App.module.scss";
import {Counter} from "./component/Counter/Counter";
import {Settings} from "./component/Settings/Settings";
import {
   reducer,
   StateType
} from "./reduser/reduser";
import {
   AddErrorMaxValueAC,
   AddErrorStartValueAC,
   ChangeMaxValueAC,
   ChangeStartValueAC, CounterAC, CounterActivateEditModeAC, CounterDeactivateEditModeAC,
   DeleteErrorMaxValueAC,
   DeleteErrorStartValueAC, MaxValueAC, ResetCounterAC, StartValueAC
} from "./reduser/actions";

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
         dispatch(StartValueAC(newStartValue))
         dispatch(MaxValueAC(newMaxValue))
         dispatch(ResetCounterAC())
         if (newStartValue < 0) {
            dispatch(CounterActivateEditModeAC())
            dispatch(AddErrorStartValueAC())
         }
         if (newMaxValue <= newStartValue) {
            dispatch(CounterActivateEditModeAC())
            dispatch(AddErrorMaxValueAC())
            dispatch(AddErrorStartValueAC())
         }
      }
   }, []);


   useEffect(() => {
      localStorage.setItem('startValue', JSON.stringify(state.startValue))
      localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
   }, [state.startValue, state.maxValue]);


   const addIncrement = () => {
      dispatch(CounterAC())
   }
   const resetIncrement = () => {
      dispatch(ResetCounterAC())
   }
   const onChangeMaxValue = (value: number) => {
      dispatch(ChangeMaxValueAC(value))
      dispatch(DeleteErrorMaxValueAC())
      dispatch(DeleteErrorStartValueAC())
      if (value <= state.startValue) {
         dispatch(AddErrorMaxValueAC())
         dispatch(AddErrorStartValueAC())
      }
   }
   const onChangeStartValue = (value: number) => {
      dispatch(ChangeStartValueAC(value))
      dispatch(DeleteErrorStartValueAC())
      if (value < 0 || state.maxValue <= state.startValue || state.startValue === state.maxValue) {
         dispatch(AddErrorStartValueAC())
      }
   }
   const onActiveEditMode = () => {
      dispatch(CounterActivateEditModeAC())
   }
   const onDeactivateEditMode = () => {
      dispatch(ResetCounterAC())
      dispatch(CounterDeactivateEditModeAC())
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
