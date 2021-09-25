import React, { useState } from "react";
import { StarsRating } from "stars-rating-react-hooks";
import PlusIcon from "../../../../../assets/icons/Plus";
import StarIcon from "../../../../../assets/icons/Star";
import Tag from "../../../../shared/Tag";
import styles from "./item.module.css";
import Image from "next/image";

interface IProps {
  title: string;
}

export default function Item({ title }: IProps) {
  const [rat, setRat] = useState(4);

  const config = {
    totalStars: 5,
    initialSelectedValue: rat,
    renderFull: <StarIcon active />,
    renderEmpty: <StarIcon />,
  };
  return (
    <div className={styles.item}>
      <div className={styles.item_img}>
        <Image src="/note.png" layout="fill" alt="note" />
      </div>
      <div>
        <div className={styles.item_header}>
          <p className={styles.item_header_name}>{title}</p>
          <StarsRating config={config} onStarsRated={setRat} />
          <p className={styles.item_header_review}>4.1 based | 112 reviews</p>
          <PlusIcon className={styles.item_header_plus} />
        </div>
        <p className={styles.item_body}>
          Directors` authority. This is 1 of 9 content supervisions for the
          Equity & Trusts course
        </p>
        <div className={styles.item_tags}>
          <Tag text="London School of Economics" />
          <Tag text="Contract law" />
        </div>
        <p className={styles.item_pages}>132 pages | October 2021</p>
      </div>
    </div>
  );
}
