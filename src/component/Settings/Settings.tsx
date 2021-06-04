import React from "react";
import s from "./Settings.module.scss";
import {Button} from "../Button/Button";
import {DisplaySettings} from "./DisplaySettings/DisplaySettingst";

type SettingsPropsType = {
   maxValue: number
   startValue: number
   onChangeMaxValue: (value: number) => void
   onChangeStartValue: (value: number) => void
   onActiveEditMode: () => void
   onDeactivateEditMode: () => void
   error: boolean
   counterEditMode: boolean
}


export const Settings:React.FC<SettingsPropsType> = (
   {
      maxValue,
      startValue,
      onChangeMaxValue,
      onChangeStartValue,
      onActiveEditMode,
      onDeactivateEditMode,
      error,
      counterEditMode
   }) => {
   console.log('Settings Err:' + error)
   const setDisabledClass = `${s.btn} ${counterEditMode ? '' : s.disableBtn}`

   const setSettings = () => {
      onDeactivateEditMode()
   }
   const disabledSetBtn = () => {
      return !counterEditMode || startValue < 0 || maxValue <= startValue;

   }

   return (
      <div>
         <div className={s.body}>
            <DisplaySettings
               error={error}
               onActiveEditMode={onActiveEditMode}
               onChangeStartValue={onChangeStartValue}
               onChangeMaxValue={onChangeMaxValue}
               maxValue={maxValue}
               startValue={startValue}
            />
            <div className={s.bottom}>
               <Button
                  className={setDisabledClass}
                  onClick={setSettings}
                  disabled={disabledSetBtn()}
               >set
               </Button>
            </div>
         </div>
      </div>
   )
}
