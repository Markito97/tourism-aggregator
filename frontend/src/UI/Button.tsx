import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const classes = [styles.custom__button];
  return (
    <button {...props} className={classes.join(" ")}>
      {children}
    </button>
  );
};
