import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState } from "react";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import Button from "../Button";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import Suggestions from "../Suggestions";
import styles from "./header.module.css";

export interface IHeaderOptions {
  withSearch: boolean;
  withDiscoverBtn: boolean;
}
export default function Header({
  withSearch,
  withDiscoverBtn,
}: IHeaderOptions) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearText = (e: any) => {
    setFocused(false);
    setSearchText("");
    e.stopPropagation();
  };

  const toggleFocus = () => setFocused(!focused);

  return (
    <div className={styles.header}>
      <div className={styles.header_block1}>
        <Logo />
        {withSearch && (
          <div
            className={styles.header_search}
            onClick={() => inputRef.current?.focus()}
          >
            <SearchInput
              clearIconClick={clearText}
              inputRef={inputRef}
              value={searchText}
              onChange={handleText}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
              placeholder="Search for notes, flashcards and many more"
            />
            <Button
              text="Search"
              onClick={() =>
                router.push(`/search/result?text=${searchText}`, undefined, {
                  shallow: true,
                })
              }
            />
          </div>
        )}
      </div>

      <div className={styles.header_block2}>
        {withDiscoverBtn && (
          <Link passHref href="/search">
            <Button text="Discover" outlined />
          </Link>
        )}
        <div className={styles.header_user_row}>
          <Image
            src="/user-image.png"
            alt="user image"
            width={43}
            height={43}
            className={styles.header_icon}
          />
          <ChevronDownIcon />
        </div>
      </div>
      {/* <Suggestions inputFocused={focused} /> */}
    </div>
  );
}
