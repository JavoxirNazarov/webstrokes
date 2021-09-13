import React from "react";
import Wrapper from "../../shared/Wrapper";
import styles from "./banner.module.css";

export default function Banner({ title }: { title: string }) {
  return (
    <div className={styles.banner}>
      <Wrapper withPadding>
        <p className={styles.banner_title}>{title}</p>
      </Wrapper>
    </div>
  );
}
