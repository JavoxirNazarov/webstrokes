import clsx from "clsx";
import React, { CSSProperties } from "react";
import styles from "./tabs.module.css";

interface IProps {
  items: { text: string; value: string; itemStyle?: CSSProperties }[];
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
          style={item.itemStyle}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
