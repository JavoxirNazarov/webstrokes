import React from "react";
import { Range } from "rc-slider";
import styles from "./sidebar.module.css";
import Tabs from "../../../../shared/Tabs";
import Button from "../../../../shared/Button";
import CheckBox from "../../../../shared/CheckBox";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Tabs
        containerClassName={styles.specific_tab}
        onChange={() => {}}
        items={[
          { text: "Specific", value: "specific" },
          { text: "Universal", value: "universal" },
        ]}
        selectedValue="specific"
      />

      <p className={styles.label}>University/school</p>
      <Button
        btnClassName={styles.select_btn}
        outlined
        text="Select university or school"
      />

      <div className={styles.divider} />

      <p className={styles.label}>Type</p>

      <Tabs
        containerClassName={styles.type_tab}
        onChange={() => {}}
        items={[
          { text: "All", value: "all", itemStyle: { padding: "0 27px" } },
          { text: "Notes", value: "notes" },
          { text: "Flashcards", value: "flashcards" },
        ]}
        selectedValue="all"
      />

      <p className={styles.label}>Rating</p>
      <div className={styles.ratings}>
        <div className={styles.rating}>
          <CheckBox checked={true} onClick={() => {}} />
          <p>All</p>
        </div>
        <div className={styles.rating}>
          <CheckBox checked={false} onClick={() => {}} />
          <p>5</p>
        </div>
        <div className={styles.rating}>
          <CheckBox checked={false} onClick={() => {}} />
          <p>4</p>
        </div>
        <div className={styles.rating}>
          <CheckBox checked={false} onClick={() => {}} />
          <p>3</p>
        </div>
        <div className={styles.rating}>
          <CheckBox checked={false} onClick={() => {}} />
          <p>2</p>
        </div>
        <div className={styles.rating}>
          <CheckBox checked={false} onClick={() => {}} />
          <p>1</p>
        </div>
      </div>

      <p className={styles.label}>Pages</p>

      <div className={styles.pages}>
        <input className={styles.page_input} type="text" />
        <input className={styles.page_input} type="text" />
      </div>

      <div className={styles.page_range}>
        <Range
          allowCross={false}
          defaultValue={[0, 20]}
          onChange={() => {}}
          trackStyle={[{ background: "#000000", height: "12px" }]}
          handleStyle={[
            { border: "2px solid #000000", height: "24px", width: "24px" },
            { border: "2px solid #000000", height: "24px", width: "24px" },
          ]}
          railStyle={{
            borderRadius: "12px",
            background: "#fff",
            border: "2px solid #b8b8b8",
            height: "12px",
          }}
          activeDotStyle={{ background: "red" }}
        />
      </div>

      <p className={styles.label}>Date range</p>
      <div className={styles.date}>
        <input className={styles.date_input} type="text" />
        <input className={styles.date_input} type="text" />
      </div>

      <Button text="Reset all" outlined />
    </div>
  );
}
