import React, { ChangeEvent, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Banner from "../../components/pages/subjects/Banner";
import Category from "../../components/pages/subjects/Category";
import SearchInput from "../../components/shared/SearchInput";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/subjects.module.css";

export default function Index() {
  const [search, setSearch] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearText = (e: any) => {
    setSearch("");
    e.stopPropagation();
  };

  return (
    <MainLayout withSearch withDiscoverBtn title="Subjects">
      <Banner title="All subjects" />
      <Wrapper withPadding wrapperClassName={styles.container}>
        <SearchInput
          inputContainerClassName={styles.searchInput}
          value={search}
          onChange={handleText}
          clearIconClick={clearText}
          placeholder="Search by name"
        />
        <Category title="Study category 1" />
        <Category title="Study category 1" />
        <Category title="Study category 1" />
      </Wrapper>
    </MainLayout>
  );
}
