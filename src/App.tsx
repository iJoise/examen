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
   MaxValueAC,
   ResetCounterAC,
   StartValueAC
} from "./redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {selectAllState} from "./redux/selectors";

const App: React.FC = () => {
   // const [state, dispatch] = useReducer(counterReducer, initialState);

   const dispatch = useDispatch<Dispatch<ActionType>>();
   const {
      counter,
      counterEditMode,
      errorMaxValue,
      errorStartValue,
      startValue,
      maxValue
   } = useSelector(selectAllState)

   useEffect(() => {
      const startValueLS = localStorage.getItem('startValue')
      const maxValueLS = localStorage.getItem('maxValue')
      if (startValueLS && maxValueLS) {
         const newStartValue = JSON.parse(startValueLS)
         const newMaxValue = JSON.parse(maxValueLS)
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
      localStorage.setItem('startValue', JSON.stringify(startValue))
      localStorage.setItem('maxValue', JSON.stringify(maxValue))
   }, [startValue, maxValue]);


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
      if ( startValue < 0) {
         dispatch(AddErrorStartValueAC())
      }
   }
   const onChangeStartValue = (value: number) => {
      dispatch(ChangeStartValueAC(value))
      dispatch(DeleteErrorStartValueAC())
      if (value < 0 || maxValue <= startValue || startValue === maxValue || maxValue === 0) {
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
