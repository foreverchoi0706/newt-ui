import React, { FC, ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<IProps> = (props) => {
  return <button>{props.label}</button>;
};

export default Button;
