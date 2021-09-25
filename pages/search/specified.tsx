import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Tabs from "../../components/shared/Tabs";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/search.module.css";
import { createArray } from "../../utils/helpers/createArray";
import Header from "../../components/shared/Header/Index";
import SearchBar from "../../components/pages/search/specific/SearchBar";

export default function Specified() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const routeType = router.query.type as string;

  const specifiedTypes = [
    { text: "Universities", value: "universities" },
    { text: "Schools", value: "schools" },
  ];

  useEffect(() => {
    setSearchText("");
  }, [routeType]);

  return (
    <MainLayout title={`Search for university ${routeType}`}>
      <Header withSearch />

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
              selectedValue={routeType}
            />

            <SearchBar searchType={routeType} />

            <div className={styles.specific_popular}>
              <div className={styles.specific_popular_item}>
                <div>
                  <img src="/oxford-university.png" alt="oxford university" />
                </div>
                <p className={styles.specific_popular_item_name}>
                  King’s College London
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </MainLayout>
  );
}
