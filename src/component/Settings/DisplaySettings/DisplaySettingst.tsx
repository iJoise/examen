import React, {ChangeEvent} from "react";
import s from "./DisplaySettings.module.scss";

type DisplaySettingsPropsType = {
   maxValue: number
   startValue: number
   onChangeMaxValue: (value: number) => void
   onChangeStartValue: (value: number) => void
   onActiveEditMode: () => void
   error: boolean
}


export const DisplaySettings: React.FC<DisplaySettingsPropsType> = (
   {
      startValue,
      maxValue,
      onChangeMaxValue,
      onChangeStartValue,
      onActiveEditMode,
      error
   }) => {

   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.valueAsNumber
      onChangeMaxValue(value)
   }

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.valueAsNumber
      onChangeStartValue(value)
   }

   const inputClass = `${s.input__number} ${error ? s.error : ''}`

   return (
      <div className={s.counter}>
         <div className={s.input}>
            <div className={s.input__top}>
               <p className={s.input__name}>Max value:</p>
               <input
                  onFocus={onActiveEditMode}
                  onChange={onChangeMaxValueHandler}
                  value={maxValue}
                  className={inputClass}
                  type="number"
               />
            </div>
            <div className={s.input__bottom}>
               <p className={s.input__name}>Start value:</p>
               <input
                  onFocus={onActiveEditMode}
                  onChange={onChangeStartValueHandler}
                  value={startValue}
                  className={inputClass}
                  type="number"
               />
            </div>
         </div>
      </div>
   )
}
