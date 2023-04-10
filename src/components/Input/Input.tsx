import React, { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, ...rest }, ref) => {
  return <input ref={ref} className="w-full border" {...rest} />;
});

export default Input;
