import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";

const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className="w-full border" {...rest}>
      {children}
    </button>
  );
});

export default Button;
