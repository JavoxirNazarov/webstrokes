import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState } from "react";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import Button from "../Button";
import Logo from "../Logo";
import styles from "./header.module.css";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CompassIcon from "../../../assets/icons/Compass";

export interface IHeaderOptions {
  withSearch?: boolean;
}
export default function Header({ withSearch = true }: IHeaderOptions) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_block1}>
        <Logo />
        {withSearch && (
          <div
            className={styles.header_search}
            onClick={() => inputRef.current?.focus()}
          >
            <SearchIcon />
            <input
              ref={inputRef}
              value={searchText}
              onChange={handleText}
              className={styles.header_search_input}
              type="text"
              placeholder="Search for notes, flashcards and more"
            />
            <Button
              size="md"
              text="Search"
              onClick={() =>
                router.push(
                  `/search/result?searching=${searchText}`,
                  undefined,
                  {
                    shallow: true,
                  },
                )
              }
            />
          </div>
        )}
      </div>

      <div className={styles.header_block2}>
        <Link href="/search" passHref>
          <a className={styles.header_discover}>
            <CompassIcon />
            <p>Discover</p>
          </a>
        </Link>
        <div className={styles.user_row}>
          <a href="" className={styles.user_link_block}>
            <Image
              src="/user-image.png"
              alt="user image"
              width={43}
              height={43}
              className={styles.user_icon}
            />
            <p className={styles.user_name}>Jane Doe</p>
          </a>

          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}
