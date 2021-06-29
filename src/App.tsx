import React, {useCallback, useEffect} from 'react';
import s from "./App.module.scss";
import {Counter} from "./component/Counter/Counter";
import {Settings} from "./component/Settings/Settings";
import {
   ActionType,
   ChangeMaxValueAC,
   ChangeStartValueAC,
   CounterAC,
   ResetCounterAC,
   SetEditModeAC,
   SetErrorMaxValueAC,
   SetErrorStartValueAC
} from "./redux/actions";
import {batch, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "./redux/store";
import {StateType} from "./redux/reduser";

const App: React.FC = () => {

   const dispatch = useDispatch<Dispatch<ActionType>>();
   const counterState = useSelector<RootStateType, StateType>(state => state.counter)
   const {
      counter,
      counterEditMode,
      errorMaxValue,
      errorStartValue,
      startValue,
      maxValue
   } = counterState;

   useEffect(() => {
      dispatch(ResetCounterAC());
      if (startValue < 0) {
         batch(() => {
            dispatch(SetEditModeAC(true));
            dispatch(SetErrorStartValueAC(true));
         })
      }
      if (maxValue <= startValue) {
         batch(() => {
            dispatch(SetEditModeAC(true));
            dispatch(SetErrorMaxValueAC(true));
            dispatch(SetErrorStartValueAC(true));
         })
      }
   }, [dispatch, maxValue, startValue]);

   const addIncrement = useCallback(() => {
      dispatch(CounterAC());
   },[dispatch]);
   const resetIncrement = useCallback(() => {
      dispatch(ResetCounterAC());
   }, [dispatch]);

   const onChangeMaxValue = useCallback((value: number) => {
      batch(() => {
         dispatch(ChangeMaxValueAC(value));
         dispatch(SetErrorMaxValueAC(false));
         dispatch(SetErrorStartValueAC(false));
         if (value <= startValue) {
            dispatch(SetErrorMaxValueAC(true));
            dispatch(SetErrorStartValueAC(true));
         }
         if (value <= 0) {
            dispatch(SetErrorMaxValueAC(true));
         }
         if (startValue < 0) {
            dispatch(SetErrorStartValueAC(true));
         }
      })
   }, [dispatch, startValue]);
   const onChangeStartValue = useCallback((value: number) => {
      batch(() => {
         dispatch(SetErrorStartValueAC(false));
         dispatch(SetErrorMaxValueAC(false));
         dispatch(ChangeStartValueAC(value));
      })
      if (value < 0 || maxValue <= startValue || maxValue === 0) {
         dispatch(SetErrorStartValueAC(true));
      }
   }, [dispatch, maxValue, startValue]);

   const onActiveEditMode = useCallback(() => {
      dispatch(SetEditModeAC(true));
   }, [dispatch]);
   const onDeactivateEditMode = useCallback(() => {
      batch(() => {
         dispatch(ResetCounterAC());
         dispatch(SetEditModeAC(false));
      })
   }, [dispatch]);


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
