import clsx from "clsx";
import React, { ChangeEventHandler } from "react";
import Button from "../Button";
import styles from "./searchInput.module.css";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBtnCkick?: () => void;
  placeholder?: string;
  containerClassName?: string;
}

export default function SearchInputBig({
  value,
  placeholder = "Search for notes, flashcards and many more",
  onChange,
  onBtnCkick,
  containerClassName,
}: IProps) {
  return (
    <div className={clsx(styles.container, containerClassName)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <Button text="Search" onClick={onBtnCkick} btnClassName={styles.btn} />
    </div>
  );
}
