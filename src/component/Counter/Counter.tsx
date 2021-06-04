import React from 'react';
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
   error: boolean
}

export const Counter: React.FC<CounterPropsType> = (
   {
      counter,
      addIncrement,
      resetIncrement,
      maxValue,
      minValue,
      counterEditMode,
      error
   }) => {


   const incrementDisabledClass = `${s.btn} ${counter === maxValue ? s.disableBtn : ''} ${counterEditMode && s.disableBtn}`;
   const resetDisabledClass = `${s.btn} ${counter === minValue ? s.disableBtn : ''} ${counterEditMode && s.disableBtn}`;

   const disabledIncrementBtn = () => {
      if (counterEditMode) {
         return true
      }
      return counter === maxValue;
   }
   const disabledResetBtn = () => {
      if (counterEditMode) {
         return true
      }
      return counter === minValue;
   }

   return (
      <div className={s.body}>
         <DisplayCounter
            counter={counter}
            maxValue={maxValue}
            counterEditMode={counterEditMode}
            error={error}
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
}
