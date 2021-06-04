import React from "react";

export type ButtonPropsType = {
   className: string
   onClick: () => void
   disabled: boolean
}
export const Button: React.FC<ButtonPropsType> = (
   {
      className,
      onClick,
      disabled,
      children
   }) => {

   return (
      <button
         className={className}
         onClick={onClick}
         disabled={disabled}
      >{children}
      </button>
   )
}