import React from 'react';
import s from "./Counter.module.scss";

type CounterPropsType = {
   counter: number
   addIncrement: () => void
   resetIncrement: () => void
}

export const Counter: React.FC<CounterPropsType> = (
   {
      counter,
      addIncrement,
      resetIncrement
   }) => {

   const maxValue = 5;
   const counterClass = `${s.counterSpan} ${counter >= maxValue ? s.red : ''}`;
   const incrementDisabledClass = `${s.btn} ${counter === maxValue ? s.disableBtn : ''}`;
   const resetDisabledClass = `${s.btn} ${counter === 0 ? s.disableBtn : ''}`;

   const disabledIncrementBtn = () => {
      return counter === maxValue;
   }
   const disabledResetBtn = () => {
      return counter === 0;
   }

   return (
      <div className={s.body}>
         <div className={s.counter}>
            <span className={counterClass}>{counter}</span>
         </div>
         <div className={s.bottom}>
            <div className={s.bottom_btn}>
               <button
                  className={incrementDisabledClass}
                  onClick={addIncrement}
                  disabled={disabledIncrementBtn()}
               >inc
               </button>
               <button
                  className={resetDisabledClass}
                  onClick={resetIncrement}
                  disabled={disabledResetBtn()}
               >reset
               </button>
            </div>
         </div>
      </div>
   );
}
