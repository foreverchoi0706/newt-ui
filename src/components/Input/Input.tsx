import React, { InputHTMLAttributes, forwardRef } from "react";
import cns from "classnames";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={cns(
        className,
        "w-full border p-2 outline-none focus:bg-slate-100"
      )}
      {...rest}
    />
  );
});

export default Input;
