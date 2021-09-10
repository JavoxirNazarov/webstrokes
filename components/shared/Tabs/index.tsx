import clsx from "clsx";
import React from "react";
import styles from "./tabs.module.css";

interface IProps {
  items: { text: string; value: string }[];
  selectedValue: string;
  onChange: (val: string) => void;
  containerClassName?: string;
}

export default function Tabs({
  items,
  selectedValue,
  onChange,
  containerClassName,
}: IProps) {
  return (
    <div className={clsx(styles.tabs, containerClassName)}>
      {items.map((item, i) => (
        <div
          onClick={() => onChange(item.value)}
          className={clsx(styles.tab, {
            [styles.tab_selected]: item.value === selectedValue,
          })}
          key={i}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
