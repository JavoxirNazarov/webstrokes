import React from "react";
import { createArray } from "../../../../utils/helpers/createArray";
import Button from "../../../shared/Button";
import LinkBlock from "../../../shared/LinkBlock";
import Wrapper from "../../../shared/Wrapper";
import styles from "./specific.module.css";
import Link from "next/link";

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
          <Link href="/search/specified/?type=universities" passHref shallow>
            <Button text="Find your university" outlined />
          </Link>
        </div>

        <div className={styles.specific_list}>
          <p className={styles.specific_list_title}>Schools</p>
          <div className={styles.specific_list_items}>
            {createArray(8).map((el, idx) => (
              <LinkBlock key={idx} link="/" />
            ))}
          </div>
          <Link href="/search/specified/?type=schools" passHref shallow>
            <Button text="Find your school" outlined />
          </Link>
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
          <Link passHref href="/subjects">
            <Button text="View all subjects" outlined />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
