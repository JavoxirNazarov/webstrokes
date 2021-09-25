import React, { useRef, useState } from "react";
import UKIcon from "../../../../../assets/icons/flags/UK";
import LoaderIcon from "../../../../../assets/icons/Loader";
import SearchIcon from "../../../../../assets/icons/SearchIcon";
import { createArray } from "../../../../../utils/helpers/createArray";
import styles from "./searchBar.module.css";

interface IProps {
  searchType: string;
}

export default function SearchBar({ searchType }: IProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        className={`${styles.overlay} ${focused ? styles.overlay_active : ""}`}
        onClick={() => setFocused(false)}
      />

      <div className={styles.container}>
        <div
          className={`${styles.search} ${focused ? styles.search_active : ""}`}
        >
          <div
            className={styles.input_block}
            onClick={() => inputRef.current?.focus()}
          >
            <SearchIcon fill={focused ? "#E85D04" : "#1D201D"} />
            <input
              ref={inputRef}
              onFocus={() => setFocused(true)}
              type="text"
              placeholder={` Search by ${searchType} name`}
              className={styles.input}
            />
          </div>

          <div className={styles.list_container}>
            <div className={styles.list}>
              <p className={styles.list_title}>{searchType}</p>
              <div className={styles.list_inner}>
                {/* <div className={styles.list_loader}>
                  <LoaderIcon />
                </div> */}
                {createArray(15).map((el, i) => (
                  <div className={styles.list_Item} key={i}>
                    <UKIcon />
                    <p className={styles.list_Item_name}>
                      Barcelona Art & Craft College
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
