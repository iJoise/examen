import React from "react";

export type ButtonPropsType = {
   className: string
   onClick: () => void
   disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = React.memo((props) => {
   const    {
      className,
      onClick,
      disabled,
      children
   } = props;
   return (
      <button
         className={className}
         onClick={onClick}
         disabled={disabled}
      >{children}
      </button>
   )
});