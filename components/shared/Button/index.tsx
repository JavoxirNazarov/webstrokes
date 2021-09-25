import clsx from "clsx";
import React, { memo } from "react";
import styles from "./button.module.css";

interface IProps {
  text: string;
  onClick?: () => void;
  size?: "lg" | "md";
  type?: "primary" | "cta" | "secondary" | "danger" | "tertiary" | "ghost";
  disabled?: boolean;
  btnClassName?: string;
}

export default memo(function Button({
  text,
  onClick = () => {},
  size = "lg",
  type = "primary",
  disabled = false,
  btnClassName,
}: IProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.btn,
        styles[size],
        styles[type],
        { [styles.disabled]: disabled },
        btnClassName,
      )}
    >
      {text}
    </div>
  );
});
