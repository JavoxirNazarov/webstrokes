import React from "react";
import Logo from "../Logo";
import styles from "./header.module.css";
import Image from "next/image";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import ClearIcon from "../../../assets/icons/ClearIcon";
import Button from "../Button";

export default function Header({
  withSearch = false,
  withDiscoverBtn = false,
}) {
  return (
    <div className={styles.header}>
      <div className={styles.header_block1}>
        <Logo />
        {withSearch && (
          <div className={styles.header_search}>
            <div className={styles.header_search_container}>
              <SearchIcon />
              <input className={styles.header_search_input} type="text" />
              <ClearIcon />
            </div>
            <Button text="Search" />
          </div>
        )}
      </div>

      <div className={styles.header_block2}>
        {withDiscoverBtn && <Button text="Discover" outlined />}
        <div className={styles.header_user_row}>
          <Image
            src="/user-icon.png"
            alt="user icon"
            width={43}
            height={43}
            className={styles.header_icon}
          />
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}
