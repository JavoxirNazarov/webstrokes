import clsx from "clsx";
import React, { memo } from "react";
import styles from "./button.module.css";

interface IProps {
  text: string;
  onClick?: () => void;
  leftIcon?: React.ReactChild;
  rightIcon?: React.ReactChild;
  outlined?: boolean;
  disabled?: boolean;
  btnClassName?: string;
}

export default memo(function Button({
  text,
  onClick = () => {},
  leftIcon,
  rightIcon,
  outlined = false,
  disabled = false,
  btnClassName,
}: IProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.btn,
        {
          [styles.btn_primary]: !outlined,
          [styles.btn_primary_disabled]: !outlined && disabled,
          [styles.btn_outlined]: outlined,
          [styles.btn_outlined_disabled]: outlined && disabled,
        },
        btnClassName,
      )}
    >
      {leftIcon && (
        <span className={clsx(styles.btn__icon_left, "flex_center")}>
          {leftIcon}
        </span>
      )}
      {text}
      {rightIcon && (
        <span className={clsx(styles.btn__icon_right, "flex_center")}>
          {rightIcon}
        </span>
      )}
    </div>
  );
});
