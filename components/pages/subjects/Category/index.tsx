import React from "react";
import { createArray } from "../../../../utils/helpers/createArray";
import styles from "./category.module.css";

interface IProps {
  title: string;
}

export default function Category({ title }: IProps) {
  return (
    <div className={styles.category}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.items}>
        {createArray(7).map((item, idx) => (
          <div className={styles.item} key={idx}>
            <div className={styles.item_block}>
              <div className={styles.item_image} />
            </div>
            <div className={styles.item_name}>Internation law</div>
          </div>
        ))}
      </div>
    </div>
  );
}
