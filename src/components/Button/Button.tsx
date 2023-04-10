import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import cns from "classnames";

const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={cns(className, "p-2 rounded-md w-full border")}
      {...rest}
    >
      {children}
    </button>
  );
});

const Primary = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, className, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      className={cns(className, "text-white bg-[#00dd6d]")}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default Object.assign(Button, {
  Primary,
});
