import React, {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithChildren,
  forwardRef,
} from "react";

const Button: ForwardRefExoticComponent<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = forwardRef(({ children, ...rest }) => {
  return (
    <button className="w-full border" {...rest}>
      {children}
    </button>
  );
});

export default Button;
