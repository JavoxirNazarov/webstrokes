import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Button from "../../components/shared/Button";
import Header from "../../components/shared/Header/Index";
import SearchInputBig from "../../components/shared/SearchInputBig";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/search.module.css";
import { createArray } from "../../utils/helpers/createArray";

export default function Index() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <MainLayout title="Search">
      <Header withSearch={false} />
      <div className={styles.search}>
        <Wrapper>
          <div className={styles.search_container}>
            <h1 className={styles.search_title}>Discover +100 000 materials</h1>
            <SearchInputBig
              containerClassName={styles.search_input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBtnCkick={() =>
                router.push(`/search/result?searching=${search}`, undefined, {
                  shallow: true,
                })
              }
            />

            <div className={styles.search_popular}>
              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>Most popular notes</p>
                <div className={styles.search_popular_list}>
                  {createArray(6).map((el, i) => (
                    <div key={i} className={styles.search_popular_item} />
                  ))}
                </div>
              </div>

              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>
                  Most popular flashcards
                </p>
                <div className={styles.search_popular_list}>
                  {createArray(6).map((el, i) => (
                    <div key={i} className={styles.search_popular_item} />
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
                  <Button text="Find you university" />
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
                  <Button text="Find you school" />
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
                <Link passHref href="subjects">
                  <Button text="View all subjects" />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </MainLayout>
  );
}
