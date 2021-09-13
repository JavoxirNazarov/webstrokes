import clsx from "clsx";
import React, { LegacyRef } from "react";
import ClearIcon from "../../../assets/icons/ClearIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import styles from "./searchInput.module.css";

interface IProps {
  inputRef?: LegacyRef<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  clearIconClick: (e: any) => void;
  inputContainerClassName?: string;
  placeholder?: string;
}

export default function SearchInput({
  inputRef,
  value,
  onChange,
  onFocus,
  onBlur,
  clearIconClick,
  inputContainerClassName,
  placeholder = "Search",
}: IProps) {
  return (
    <div className={clsx(styles.search_container, inputContainerClassName)}>
      <SearchIcon />
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        className={styles.search_input}
        type="text"
        onFocus={onFocus}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {value && <ClearIcon onClick={clearIconClick} />}
    </div>
  );
}
