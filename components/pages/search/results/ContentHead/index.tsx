import React from "react";
import ChevronDownIcon from "../../../../../assets/icons/ChevronDownIcon";
import Button from "../../../../shared/Button";
import styles from "./contentHead.module.css";

interface IProps {
  searchingText: string;
}

export default function ContentHead({ searchingText }: IProps) {
  return (
    <div className={styles.head}>
      <p className={styles.head_text}>284 search results ‘{searchingText}’</p>
      <Button outlined text="Sort by" rightIcon={<ChevronDownIcon />} />
    </div>
  );
}
