import clsx from "clsx";
import React from "react";
import styles from "./wrapper.module.css";

interface IProps {
  children: React.ReactChild | React.ReactChild[];
  wrapperClassName?: string;
  withPadding?: boolean;
}

export default function Wrapper({
  children,
  withPadding = false,
  wrapperClassName,
}: IProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        { [styles.padding]: withPadding },
        wrapperClassName,
      )}
    >
      {children}
    </div>
  );
}
