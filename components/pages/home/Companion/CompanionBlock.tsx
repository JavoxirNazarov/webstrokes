import clsx from "clsx";
import React from "react";
import Button from "../../../shared/Button";
import styles from "./companion.module.css";

interface IProps {
  title: string;
  // body: string;
  reversed?: boolean;
  btnArr: { link: string; btnText: string }[];
}

export default function CompanionBlock({
  title,
  // body,
  reversed = false,
  btnArr,
}: IProps) {
  return (
    <div
      className={clsx(styles.companion_block, {
        [styles.companion_block_reversed]: reversed,
      })}
    >
      <div className={styles.companion_block_card}>
        <div>
          <h3 className={styles.companion_block_card_title}>{title}</h3>
          <p className={styles.companion_block_card_body}>
            {/* {body} */}
            Discover over 60,000 summary notes, <br /> lecture notes and
            flashcards written by <br /> similar students on your course.
          </p>
        </div>

        <div className={styles.companion_block_card_btns}>
          {btnArr.map((el, i) => (
            <Button outlined text={el.btnText} key={i} />
          ))}
        </div>
      </div>
      <div style={{ width: "50%" }}></div>
    </div>
  );
}
