import React, {useCallback} from 'react';
import s from "./Counter.module.scss";
import {Button} from "../Button/Button";
import {DisplayCounter} from "./DisplayCounter/DisplayCounter";

type CounterPropsType = {
   counter: number
   addIncrement: () => void
   resetIncrement: () => void
   maxValue: number
   minValue: number
   counterEditMode: boolean
   errorMaxValue: boolean
   errorStartValue: boolean
}

export const Counter: React.FC<CounterPropsType> = React.memo((props) => {

   const {
      counter,
      addIncrement,
      resetIncrement,
      maxValue,
      minValue,
      counterEditMode,
      errorMaxValue,
      errorStartValue
   } = props

   const incrementDisabledClass = `${s.btn} ${counter === maxValue ? s.disableBtn : ''} ${counterEditMode && s.disableBtn}`;
   const resetDisabledClass = `${s.btn} ${counter === minValue ? s.disableBtn : ''} ${counterEditMode && s.disableBtn}`;

   const disabledIncrementBtn = useCallback(() => {
      if (counterEditMode) {
         return true
      }
      return counter === maxValue;
   }, [counter, counterEditMode, maxValue]);
   const disabledResetBtn = useCallback(() => {
      if (counterEditMode) {
         return true
      }
      return counter === minValue;
   }, [counter, counterEditMode, minValue]);

   return (
      <div className={s.body}>
         <DisplayCounter
            counter={counter}
            maxValue={maxValue}
            counterEditMode={counterEditMode}
            errorMaxValue={errorMaxValue}
            errorStartValue={errorStartValue}
         />
         <div className={s.bottom}>
            <Button
               className={incrementDisabledClass}
               onClick={addIncrement}
               disabled={disabledIncrementBtn()}
            >inc
            </Button>
            <Button
               className={resetDisabledClass}
               onClick={resetIncrement}
               disabled={disabledResetBtn()}
            >reset
            </Button>
         </div>
      </div>
   );
})
