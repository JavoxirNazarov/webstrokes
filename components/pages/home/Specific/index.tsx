import React from "react";
import { createArray } from "../../../../utils/helpers/createArray";
import Button from "../../../shared/Button";
import LinkBlock from "../../../shared/LinkBlock";
import Wrapper from "../../../shared/Wrapper";
import styles from "./specific.module.css";

export default function Specific() {
  return (
    <Wrapper withPadding>
      <div className={styles.specific}>
        <h6 className={styles.discover}>DISCOVER</h6>
        <p className={styles.specific_title}>Specific to you</p>

        <div className={styles.specific_list}>
          <p className={styles.specific_list_title}>Universities</p>
          <div className={styles.specific_list_items}>
            {createArray(8).map((el, idx) => (
              <LinkBlock key={idx} link="/" />
            ))}
          </div>
          <Button text="Find your university" outlined />
        </div>

        <div className={styles.specific_list}>
          <p className={styles.specific_list_title}>Schools</p>
          <div className={styles.specific_list_items}>
            {createArray(8).map((el, idx) => (
              <LinkBlock key={idx} link="/" />
            ))}
          </div>
          <Button text="Find your school" outlined />
        </div>
      </div>
      <div className={styles.specific}>
        <h6 className={styles.discover}>DISCOVER</h6>
        <p className={styles.specific_title}>Universal subjects</p>

        <div className={styles.specific_list}>
          <div className={styles.specific_list_items}>
            {createArray(8).map((el, idx) => (
              <LinkBlock key={idx} link="/" />
            ))}
          </div>
          <Button text="View all subjects" outlined />
        </div>
      </div>
    </Wrapper>
  );
}
