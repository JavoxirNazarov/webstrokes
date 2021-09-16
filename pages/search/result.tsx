import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Button from "../../components/shared/Button";
import CheckBox from "../../components/shared/CheckBox";
import Tabs from "../../components/shared/Tabs";
import styles from "../../styles/search.module.css";
import { Range } from "rc-slider";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import { createArray } from "../../utils/helpers/createArray";
import LinkBlock from "../../components/shared/LinkBlock";
import Image from "next/image";

export default function Result() {
  const router = useRouter();
  // {router.query.text}

  return (
    <MainLayout withDiscoverBtn withSearch title="Search Results">
      <div className={styles.results_container}>
        <div className={styles.results_sidebar}>
          <Tabs
            containerClassName={styles.results_specific_tab}
            onChange={() => {}}
            items={[
              { text: "Specific", value: "specific" },
              { text: "Universal", value: "universal" },
            ]}
            selectedValue="specific"
          />

          <p className={styles.results_label}>University/school</p>
          <Button
            btnClassName={styles.results_select_btn}
            outlined
            text="Select university or school"
          />

          <div className={styles.results_divider} />

          <p className={styles.results_label}>Type</p>

          <Tabs
            containerClassName={styles.results_type_tab}
            onChange={() => {}}
            items={[
              { text: "All", value: "all", itemStyle: { padding: "0 27px" } },
              { text: "Notes", value: "notes" },
              { text: "Flashcards", value: "flashcards" },
            ]}
            selectedValue="all"
          />

          <p className={styles.results_label}>Rating</p>
          <div className={styles.results_ratings}>
            <div className={styles.results_rating}>
              <CheckBox checked={true} onClick={() => {}} />
              <p>All</p>
            </div>
            <div className={styles.results_rating}>
              <CheckBox checked={false} onClick={() => {}} />
              <p>5</p>
            </div>
            <div className={styles.results_rating}>
              <CheckBox checked={false} onClick={() => {}} />
              <p>4</p>
            </div>
            <div className={styles.results_rating}>
              <CheckBox checked={false} onClick={() => {}} />
              <p>3</p>
            </div>
            <div className={styles.results_rating}>
              <CheckBox checked={false} onClick={() => {}} />
              <p>2</p>
            </div>
            <div className={styles.results_rating}>
              <CheckBox checked={false} onClick={() => {}} />
              <p>1</p>
            </div>
          </div>

          <p className={styles.results_label}>Pages</p>

          <div className={styles.results_pages}>
            <input className={styles.results_page_input} type="text" />
            <input className={styles.results_page_input} type="text" />
          </div>

          <div className={styles.results_page_range}>
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

          <p className={styles.results_label}>Date range</p>
          <div className={styles.results_date}>
            <input className={styles.results_date_input} type="text" />
            <input className={styles.results_date_input} type="text" />
          </div>

          <Button text="Reset all" outlined />
        </div>

        <div className={styles.results_content}>
          <div className={styles.results_content_head}>
            <p className={styles.results_content_head_text}>
              284 search results ‘contract law’
            </p>
            <Button outlined text="Sort by" rightIcon={<ChevronDownIcon />} />
          </div>

          <div className={styles.results_content_recents}>
            <LinkBlock
              link=""
              containerClassName={styles.results_content_recent}
            >
              <Image src="/note.png" width="100%" height="100%" alt="note" />
            </LinkBlock>
            <LinkBlock
              link=""
              containerClassName={styles.results_content_recent}
            >
              <Image src="/note.png" width="100%" height="100%" alt="note" />
            </LinkBlock>
            <LinkBlock
              link=""
              containerClassName={styles.results_content_recent}
            >
              <Image src="/note.png" width="100%" height="100%" alt="note" />
            </LinkBlock>
            <LinkBlock
              link=""
              containerClassName={styles.results_content_recent}
            >
              <Image src="/note.png" width="100%" height="100%" alt="note" />
            </LinkBlock>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
