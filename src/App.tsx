import React, {useEffect} from 'react';
import s from "./App.module.scss";
import {Counter} from "./component/Counter/Counter";
import {Settings} from "./component/Settings/Settings";
import {
   ActionType,
   AddErrorMaxValueAC,
   AddErrorStartValueAC,
   ChangeMaxValueAC,
   ChangeStartValueAC,
   CounterAC,
   CounterActivateEditModeAC,
   CounterDeactivateEditModeAC,
   DeleteErrorMaxValueAC,
   DeleteErrorStartValueAC,
   ResetCounterAC
} from "./redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "./redux/store";
import {StateType} from "./redux/reduser";

const App: React.FC = () => {

   const counterState = useSelector<RootStateType, StateType>(state => state.counter)
   const dispatch = useDispatch<Dispatch<ActionType>>();
   const {
      counter,
      counterEditMode,
      errorMaxValue,
      errorStartValue,
      startValue,
      maxValue
   } = counterState

   useEffect(() => {
      dispatch(ResetCounterAC())
      if (startValue < 0) {
         dispatch(CounterActivateEditModeAC())
         dispatch(AddErrorStartValueAC())
      }
      if (maxValue <= startValue) {
         dispatch(CounterActivateEditModeAC())
         dispatch(AddErrorMaxValueAC())
         dispatch(AddErrorStartValueAC())
      }
   }, [dispatch, maxValue, startValue]);

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
      if (value <= startValue) {
         dispatch(AddErrorMaxValueAC())
         dispatch(AddErrorStartValueAC())
      }
      if (value <= 0) {
         dispatch(AddErrorMaxValueAC())
      }
      if (startValue < 0) {
         dispatch(AddErrorStartValueAC())
      }
   }
   const onChangeStartValue = (value: number) => {
      dispatch(DeleteErrorStartValueAC())
      dispatch(DeleteErrorMaxValueAC())
      dispatch(ChangeStartValueAC(value))
      if (value < 0 || maxValue <= startValue || maxValue === 0) {
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
            errorStartValue={errorStartValue}
            errorMaxValue={errorMaxValue}
            onDeactivateEditMode={onDeactivateEditMode}
            onActiveEditMode={onActiveEditMode}
            onChangeStartValue={onChangeStartValue}
            onChangeMaxValue={onChangeMaxValue}
            maxValue={maxValue}
            startValue={startValue}
            counterEditMode={counterEditMode}
         />
         <Counter
            errorStartValue={errorStartValue}
            errorMaxValue={errorMaxValue}
            counterEditMode={counterEditMode}
            maxValue={maxValue}
            minValue={startValue}
            counter={counter}
            addIncrement={addIncrement}
            resetIncrement={resetIncrement}
         />

      </div>
   );
}

export default App;
