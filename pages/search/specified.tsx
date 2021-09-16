import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import LinkBlock from "../../components/shared/LinkBlock";
import SearchInputBig from "../../components/shared/SearchInputBig";
import Tabs from "../../components/shared/Tabs";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/search.module.css";
import { createArray } from "../../utils/helpers/createArray";
import Image from "next/image";

export default function Specified() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const specifiedTypes = [
    { text: "Schools", value: "schools" },
    { text: "Universities", value: "universities" },
  ];

  useEffect(() => {
    setSearchText("");
  }, [router.query.type]);

  const UniversitiesBlock = () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        alt="router.query.type"
        src={
          router.query.type == "universities"
            ? "/university.png"
            : "/school.png"
        }
        width="100%"
        height="100%"
      />
    </div>
  );

  return (
    <MainLayout
      withDiscoverBtn
      withSearch
      title={`Search for university ${router.query.type}`}
    >
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onBtnCkick={() =>
                router.push(`/search/result?text=${searchText}`, undefined, {
                  shallow: true,
                })
              }
            />

            <div className={styles.search_popular}>
              <div className={styles.search_popular_block}>
                <p className={styles.search_block_title}>
                  Most popular {router.query.type}
                </p>
                <div className={styles.search_popular_list}>
                  {createArray(10).map((el, i) => (
                    <LinkBlock
                      containerClassName={styles.search_popular_item}
                      link="/"
                      key={i}
                      footerElement={
                        <p className={styles.search_popular_item_name}>
                          London School of Economics
                        </p>
                      }
                    >
                      <UniversitiesBlock />
                    </LinkBlock>
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
