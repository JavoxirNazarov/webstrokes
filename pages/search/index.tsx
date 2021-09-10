import React from "react";
import EmptyLayout from "../../components/layouts/EmptyLayout";
import Header from "../../components/shared/Header/Index";
import LinkBlock from "../../components/shared/LinkBlock";
import SearchInputBig from "../../components/shared/SearchInputBig";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/search.module.css";
import { createArray } from "../../utils/helpers/createArray";
import Link from "next/link";
import Button from "../../components/shared/Button";
import MainLayout from "../../components/layouts/MainLayout";

export default function index() {
  return (
    <MainLayout title="Search">
      <div className={styles.search}>
        <Wrapper>
          <div className={styles.search_container}>
            <h1 className={styles.search_title}>Discover +100 000 materials</h1>
            <SearchInputBig
              containerClassName={styles.search_input}
              value={""}
              onChange={() => {}}
            />

            <div className={styles.search_popular}>
              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>Most popular notes</p>
                <div className={styles.search_popular_list}>
                  {createArray(6).map((el, i) => (
                    <LinkBlock
                      blockClassName={styles.search_popular_item}
                      link="/"
                      key={i}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>
                  Most popular flashcards
                </p>
                <div className={styles.search_popular_list}>
                  {createArray(6).map((el, i) => (
                    <LinkBlock
                      blockClassName={styles.search_popular_item}
                      link="/"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.search_links}>
              <div>
                <p className={styles.search_block_title}>By universities</p>
                <div className={styles.search_links_block}>
                  {createArray(5).map((el, i) => (
                    <Link href="/" key={i}>
                      <a className={styles.search_links_link}>University A</a>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/search/specified/?type=universities"
                  passHref
                  shallow
                >
                  <Button text="Find you university" outlined />
                </Link>
              </div>

              <div>
                <p className={styles.search_block_title}>By schools</p>
                <div className={styles.search_links_block}>
                  {createArray(5).map((el, i) => (
                    <Link href="/" key={i}>
                      <a className={styles.search_links_link}>University A</a>
                    </Link>
                  ))}
                </div>
                <Link href="/search/specified/?type=schools" passHref shallow>
                  <Button text="Find you school" outlined />
                </Link>
              </div>

              <div>
                <p className={styles.search_block_title}>By subjects</p>
                <div className={styles.search_links_block}>
                  {createArray(10).map((el, i) => (
                    <Link href="/" key={i}>
                      <a className={styles.search_links_link}>University A</a>
                    </Link>
                  ))}
                </div>
                <Button text="View all subjects" outlined />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </MainLayout>
  );
}
