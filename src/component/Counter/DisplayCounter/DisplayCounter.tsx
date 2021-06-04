import React from "react";
import s from "./DisplayCounter.module.scss";

type TopCounterPropsType = {
   counter: number
   maxValue: number
   counterEditMode: boolean
   error: boolean
}


export const DisplayCounter: React.FC<TopCounterPropsType> = (
   {
      counter,
      maxValue,
      counterEditMode,
      error
   }) => {


   const counterClass = `${s.counter__span} ${counter === maxValue ? s.red : ''}`;
   const editTextClass = `${s.counter__edit_text} ${error ? s.red : ''}`
   const editText = error ? 'Incorrect value!' : 'enter values and press "set"'

   return (
      <div className={s.counter}>
         {
            counterEditMode
               ? <span className={editTextClass}>{editText}</span>
               : <span className={counterClass}>{counter}</span>
         }
      </div>
   )
}
