import React from "react";
import FlashcardsIcon from "../../../../../assets/icons/Flashcards";
import { createArray } from "../../../../../utils/helpers/createArray";
import Image from "next/image";
import styles from "./recents.module.css";
import Tag from "../../../../shared/Tag";

export default function Recents() {
  return (
    <div className={styles.recents}>
      {createArray(4).map((el, i) => (
        <div key={i} className={styles.recent}>
          <div className={styles.recent_item}>
            {i == 1 ? (
              <FlashcardsIcon />
            ) : (
              <Image src="/note.png" layout="fill" alt="note" />
            )}
          </div>
          <p className={styles.recent_text}>
            {i == 1
              ? "Contract law "
              : "Elements of Deductive Logic Notes 2016"}
          </p>
          <div>
            <Tag
              text="London school of economics"
              className={styles.recent_tag}
            />
            <Tag text="Contract law 001" className={styles.recent_tag} />
          </div>
        </div>
      ))}
    </div>
  );
}
