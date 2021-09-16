import React from "react";
import { createArray } from "../../../../utils/helpers/createArray";
import LinkBlock from "../../../shared/LinkBlock";
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
          <LinkBlock
            containerClassName={styles.item}
            key={idx}
            link="/subjects"
            footerElement={
              <div className={styles.item_name}>Internation law</div>
            }
          >
            <div className={styles.item_image} />
          </LinkBlock>
        ))}
      </div>
    </div>
  );
}
