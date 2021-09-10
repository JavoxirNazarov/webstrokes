import { useRouter } from "next/router";
import React, { useEffect } from "react";
import EmptyLayout from "../../components/layouts/EmptyLayout";
import MainLayout from "../../components/layouts/MainLayout";
import Header from "../../components/shared/Header/Index";
import LinkBlock from "../../components/shared/LinkBlock";
import SearchInputBig from "../../components/shared/SearchInputBig";
import Tabs from "../../components/shared/Tabs";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/search.module.css";
import { createArray } from "../../utils/helpers/createArray";

export default function Specified() {
  const router = useRouter();

  const specifiedTypes = [
    { text: "schools", value: "schools" },
    { text: "universities", value: "universities" },
  ];

  // useEffect(() => {
  // }, [router.query.type])

  return (
    <MainLayout title={`Search for university ${router.query.type}`}>
      <div className={styles.search}>
        <Wrapper>
          <div className={styles.search_container}>
            <h1 className={styles.search_title}>Where do you study?</h1>
            <Tabs
              containerClassName={styles.search_tabs}
              onChange={(val) =>
                router.replace(`/search/specified/?type=${val}`, undefined, {
                  shallow: true,
                })
              }
              items={specifiedTypes}
              selectedValue={router.query.type as string}
            />

            <SearchInputBig
              placeholder={`Search for ${router.query.type}`}
              containerClassName={styles.search_input}
              value={""}
              onChange={() => {}}
            />

            <div className={styles.search_popular}>
              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>
                  Most popular {router.query.type}
                </p>
                <div className={styles.search_popular_list}>
                  {createArray(12).map((el, i) => (
                    <LinkBlock
                      blockClassName={styles.search_popular_item}
                      link="/"
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </MainLayout>
  );
}
