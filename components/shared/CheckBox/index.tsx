import clsx from "clsx";
import React from "react";
import CheckIcon from "../../../assets/icons/Check";
import styles from "./checkbox.module.css";

interface IProps {
  checked: boolean;
  checkBoxClassName?: string;
  onClick: (val: boolean) => void;
}

export default function CheckBox({
  checked,
  onClick,
  checkBoxClassName,
}: IProps) {
  return (
    <div
      className={clsx(
        styles.checkbox,
        { [styles.checkbox_active]: checked },
        checkBoxClassName,
      )}
      onClick={() => onClick(!checked)}
    >
      {checked ? <CheckIcon /> : null}
    </div>
  );
}
