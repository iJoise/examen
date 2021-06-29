import React from "react";
import s from "./DisplayCounter.module.scss";

type TopCounterPropsType = {
   counter: number
   maxValue: number
   counterEditMode: boolean
   errorMaxValue: boolean
   errorStartValue: boolean
}


export const DisplayCounter: React.FC<TopCounterPropsType> = React.memo((props) => {

   const {
      counter,
      maxValue,
      counterEditMode,
      errorMaxValue,
      errorStartValue
   } = props

   const counterClass = `${s.counter__span} ${counter === maxValue ? s.red : ''}`;
   const editTextClass = `${s.counter__edit_text} ${errorMaxValue || errorStartValue ? s.red : ''}`
   const editText = errorMaxValue || errorStartValue ? 'Incorrect value!' : 'enter values and press "set"'

   return (
      <div className={s.counter}>
         {
            counterEditMode
               ? <span className={editTextClass}>{editText}</span>
               : <span className={counterClass}>{counter}</span>
         }
      </div>
   )
});
