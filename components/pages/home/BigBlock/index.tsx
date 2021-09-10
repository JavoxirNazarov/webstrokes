import React from "react";
import Button from "../../../shared/Button";
import styles from "./bigBlock.module.css";

interface IProps {
  backgroundColor?: string;
  title: string;
  titleColor: string;
  witBody?: boolean;
  btnArr: { link: string; btnText: string }[];
}

export default function BigBlock({
  backgroundColor,
  title,
  titleColor,
  witBody = true,
  btnArr,
}: IProps) {
  return (
    <div className={styles.block} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.block_title} style={{ color: titleColor }}>
        {title}
      </div>
      {witBody && (
        <div className={styles.block_body}>
          Discover over 60,000 summary notes, lecture notes and <br />{" "}
          flashcards written by similar students on your course.
        </div>
      )}
      <div className={styles.block_btns}>
        {btnArr.map((el, i) => (
          <Button outlined text={el.btnText} key={i} />
        ))}
      </div>
    </div>
  );
}
